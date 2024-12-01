'use client';

import { Button } from "@/components/ui/button";
import { paths } from "@/routes/paths";
import { ArrowDown, ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <header className="z-40 flex items-center gap-5 fixed top-10 w-11/12 left-1/2 transform -translate-x-1/2 bg-neutral-800 px-6 py-3 border border-neutral-600 rounded-2xl text-small xl:max-w-[1280px]">
        <Image src="/logo.svg" alt="Logo" width={90} height={26} />
        <Link href={paths.auth.login} className="ml-auto">
          <Button variant="outline">Login</Button>
        </Link>
        <Link href={paths.auth.register}>
          <Button variant="primary">Cadastrar</Button>
        </Link>
      </header>
      <div className="min-h-screen bg-gradient-to-b from-[#08090A]  to-[#121416] flex flex-col items-center py-20">
        <main className="w-11/12 flex flex-col gap-28 mt-20 xl:max-w-[1280px]">
          <section className="flex flex-col gap-6 min-h-fit lg:min-h-[650px]" id="hero">
            <h1 className="text-neutral-200 text-heading3 font-semibold leading-tight xl:text-heading2">Análise e processamento de imagens de satélite.</h1>
            <p className="text-neutral-400 text-xl font-medium text-justify lg:max-w-[500px]">Identificação de nuvens e sombras utilizando inteligência artificial. Simplifica a consulta, geração de máscaras e análise dos dados.</p>
            <Link href={paths.auth.login}>
              <Button variant="primary" className="w-fit flex">
                Consultar imagens
                <ArrowRight size={24} className="ml-2" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="flex justify-center mt-8 lg:mt-auto"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Saiba mais sobre o projeto
              <ArrowDown size={24} className="ml-2" />
            </Button>
          </section>
          <section className="flex flex-col gap-6" id="sobre">
            <h2 className="text-neutral-100 text-2xl font-semibold leading-tight text-center xl:text-heading4">Sobre o projeto</h2>
            <p className="text-neutral-300 text-large font-medium text-justify">
              O Solaris é uma plataforma web e mobile que aplica inteligência artificial para gerar máscaras de nuvens e sombras em imagens capturadas pelo satélite CBERS4A com o sensor WPM, fornecidas pelo INPE.
            </p>
            <div className="flex justify-center lg:mt-10">
              <div className="relative w-full h-64 lg:min-h-[400px]">
                <Image
                  src="/results.gif"
                  alt="Exemplo de máscara gerada pelo Solaris"
                  layout="fill"
                  objectFit="contain"
                  unoptimized
                />
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-6" id="sobre">
            <h2 className="text-neutral-100 text-2xl font-semibold leading-tight text-center md:text-left">Como funciona?</h2>
            <ol className="relative border-s border-primary-500 ml-8 md:ml-5">
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary-700 rounded-full -start-4 ring-4 ring-primary-500 text-neutral-200">
                  1
                </span>
                <h3 className="font-medium leading-tight text-neutral-200 xl:text-large">Consulta ao catálogo</h3>
                <p className="text-sm text-neutral-400 xl:text-base">Defina sua área de interesse e período.</p>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary-700 rounded-full -start-4 ring-4 ring-primary-500 text-neutral-200">
                  2
                </span>
                <h3 className="font-medium leading-tight text-neutral-200 xl:text-large">Processamento</h3>
                <p className="text-sm text-neutral-400 xl:text-base">Solaris consulta o catálogo do INPE e processa as imagens.</p>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary-700 rounded-full -start-4 ring-4 ring-primary-500 text-neutral-200">
                  3
                </span>
                <h3 className="font-medium leading-tight text-neutral-200 xl:text-large">Resultados</h3>
                <p className="text-sm text-neutral-400 xl:text-base">Receba as máscaras de nuvens, sombras de nuvens e outras informações.</p>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary-700 rounded-full -start-4 ring-4 ring-primary-500 text-neutral-200">
                  4
                </span>
                <h3 className="font-medium leading-tight text-neutral-200 xl:text-large">Análise</h3>
                <p className="text-sm text-neutral-400 xl:text-base">Analise, baixe os arquivos e use os conforme precisar.</p>
              </li>
            </ol>

          </section>
        </main>
      </div>
    </>
  );
}
