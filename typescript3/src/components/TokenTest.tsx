import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TokenTest = () => {
  const [accessToken, setAccessToken] = useState<string>('');
  const [refreshToken, setRefreshToken] = useState<string>('');

  // 초기 로그인 또는 앱 실행 시 실행되는 함수
  const handleLogin = async () => {
    try {
      // 로그인 API 호출 등의 로그인 절차 수행
      const response = await axios.post('/api/login', {
        username: 'example',
        password: 'password',
      });
      
      // 액세스 토큰과 리프레시 토큰 저장
      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
    } catch (error) {
      console.log('로그인 오류:', error);
    }
  };

  // 앱 실행 시 초기 로그인 수행
  useEffect(() => {
    handleLogin();
  }, []);

  // 토큰 리프레시 함수
  const refreshTokens = async () => {
    try {
      // 리프레시 토큰을 사용하여 새로운 액세스 토큰 발급 요청
      const response = await axios.post('/api/refresh', {
        refreshToken: refreshToken,
      });

      // 새로운 액세스 토큰으로 업데이트
      setAccessToken(response.data.accessToken);
    } catch (error) {
      console.log('토큰 리프레시 오류:', error);
    }
  };

  // 토큰 만료 시간 확인 및 리프레시 수행
  useEffect(() => {
    const interval = setInterval(() => {
      // 액세스 토큰 만료 시간 확인
      const currentTime = Math.floor(Date.now() / 1000);
      const tokenExpiration = decodeAccessToken(accessToken).exp;

      if (tokenExpiration - currentTime < 60) {
        // 만료 60초 이내라면 토큰 리프레시 수행
        refreshTokens();
      }
    }, 5000); // 5초마다 확인

    return () => {
      clearInterval(interval);
    };
  }, [accessToken]);

  // 액세스 토큰 디코딩
  const decodeAccessToken = (token:any) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      const decodedToken = JSON.parse(window.atob(base64));
      return decodedToken;
    } catch (error) {
      console.log('토큰 디코딩 오류:', error);
      return null;
    }
  };

  return (
    <div>
      <h1>리액트 토큰 리프레시 예제</h1>
      <p>액세스 토큰: {accessToken}</p>
      <p>리프레시 토큰: {refreshToken}</p>
    </div>
)}

export default TokenTest;