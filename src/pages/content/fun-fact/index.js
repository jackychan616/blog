import Head from 'next/head';
import { Container } from '@mantine/core';
import { ArtiCard } from '../../components/card';
import Meta from '../../components/meta';
import Page from '../../components/page_index';
const BlogData=[
    {name:'中國古代最重要的君主(上)',path:'/fun-fact/chinese-king1',img:'/img/chinese-king1.jpg',date:'3/3/2023'},
    {name:'中國古代最重要的君主(下)',path:'/fun-fact/chinese-king2',img:'/img/chinese-king2.jpeg',date:'3/3/2023'},
    {name:'古人的性癖好 孫中山是蘿莉控?',path:'/fun-fact/Sun-Yat-sen',img:'/img/Sun-Yat-Sen.jpeg',date:'6/3/2023'}
]


export default function ConPage (){
    return(
        <>
            <Page hTitle={"有趣小知識"} img="/img/fact.jpg">
                <ArtiCard data={BlogData}/>
            </Page>
            <Meta description="有趣小知識,中國近代史,中國歷史"  img = "img/Sun-Yat-Sen.jpeg"/>
            
        </>
    );
}
