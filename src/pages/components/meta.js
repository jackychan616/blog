import { Getblogdata } from './getrecomm';
import Head from 'next/head';
const siteTitle = "Simple Info HK";
const defaultDescription ="香港資訊類型博客,專注於提供最新的電腦,遊戲,AI等資訊";
import { NextSeo } from 'next-seo';
import { v4 as uuidv4 } from 'uuid';
function DefaultMeta({ children,pageTitle, keywords, description ,subtitle,img,alt,path}){
  return(
    <div>
      <Head>
          <meta name="description" content={description?description:defaultDescription}/>
          <title>{pageTitle ? pageTitle : siteTitle+(subtitle ?'-'+subtitle:'')}</title>
          <meta property="og:title" content={pageTitle || siteTitle} key = {description + img} />
          <meta property="og:description" content={description} key = {description} />
          <meta property="og:site_name" content="simpleinfohk.me" key = {pageTitle}/>
          <meta property='keyword' content={keywords ? keywords: pageTitle + description} key = {pageTitle + description}/>
          <meta property='og:image' content = {"https://simpleinfo.live" + img} key = {img}/>
          <meta name="googlebot" content="notranslate"></meta>
          <link rel="icon" type="image/png" href="/icon.png" />
          <meta charset="utf-8" />
          <meta name="googlebot" content="notranslate"/>
      </Head>
    </div>
  );
}
export function Meta(pageTitle, keywords, description ,subtitle,img,alt,path){
  return(
    <NextSeo
      title={pageTitle ? pageTitle :siteTitle}
      description={description ? description : defaultDescription}
      canonical="https://simpleinfohk.me/"
      openGraph={{
        title:pageTitle?pageTitle:siteTitle,
        description:description?description:defaultDescription,
        images:[
          {
            url:'https://simpleinfohk.me/icon.png',
            height:512,
            width:512,
            alt:'Simple Info HK',
            type:'image/png',
          }
        ]
      }}
    />
  );
}
export default function Page(){
  return(<></>);
}