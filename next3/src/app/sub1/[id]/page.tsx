import Link from 'next/link';
import React, { Fragment } from 'react';
import styles from '../../../styles/page.module.css';


export default function Page(){

    return (
        <Fragment>
            <h2 style={{ display: 'inline-block' }}>Sub - page2</h2>&nbsp;

            <Link className={styles.moveCompo} href='/sub1/0/0'>하위로 이동</Link>
        </Fragment>
    )
};