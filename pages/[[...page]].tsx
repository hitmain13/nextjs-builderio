import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import {
  BuilderComponent,
  builder,
  useIsPreviewing
} from '@builder.io/react'
import builderConfig from '../config/builder'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { parsePersonalizedURL } from '@builder.io/personalization-utils/next'
import { useEffect } from 'react'
import '@builder.io/widgets/dist/lib/builder-widgets-async'
import '../components/register'
import '../blocks/register'

builder.init(builderConfig.apiKey)

export async function getStaticProps({ params } : GetStaticPropsContext<{ page: string[] }>) {
  const { attributes } = parsePersonalizedURL(params?.page!);
  const pages =
    (await builder
      .get('page', {
        apiKey: builderConfig.apiKey,
        userAttributes: attributes!,
        cachebust: true
      })
      .promise()) || null

  return {
    props: {
      pages,
      attributes: attributes,
      locale: attributes!.locale || 'pt-BR'
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export default function Path({ pages, attributes, locale }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const isPreviewingInBuilder = useIsPreviewing()

  useEffect(() => {
    builder.setUserAttributes(attributes!)
  }, [])

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  const { title, description, image } = pages?.data || {}
  return (
    <>
      <Head>
        {!pages && <meta name="robots" content="noindex" />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type: 'website',
          title,
          description,
          images: [
            {
              url: image,
              width: 800,
              height: 600,
              alt: title
            }
          ]
        }}
      />
      {(isPreviewingInBuilder || pages) ? (
        <BuilderComponent
          context={{ attributes }}
          data={{ attributes, locale }}
          model="page"
          content={pages}
        />
      
      ) : (
        <DefaultErrorPage statusCode={404} />
      )}
    </>
  )
}
