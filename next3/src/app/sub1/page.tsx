import Link from 'next/link';
import React, { Fragment } from 'react';
import styles from '../../styles/page.module.css';

export default function Page(){

    return (
        <Fragment>
            <h1 style={{ display: 'inline-block' }}>Sub1 page</h1>&nbsp;

            <Link className={styles.moveCompo} href='/sub1/sub1_1'>하위로 이동</Link>
        </Fragment>
    )
};