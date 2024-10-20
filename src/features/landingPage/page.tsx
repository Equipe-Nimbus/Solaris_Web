import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink } from 'react-scroll';

export default function LandingPage() {
    return (
        <main className="bg-neutral-900 flex flex-col pt-16 pb-28 gap-28">
            <div className="flex px-24 justify-between items-start">
                <div className="flex gap-20">
                    <div className="flex items-center gap-1">
                        <Image src="/logo.svg" alt="logo" width={150} height={100} />
                    </div>
                    <div className="flex w-3/4 bg-white items-end gap-10">
                        <Link href="/" className="text-lg font-medium text-text-on-background">Home</Link>
                        <Link href="/" className="text-lg font-medium text-text-on-background">Mapa-Mundi</Link>
                        <Link href="/" className="text-lg font-medium text-text-on-background">Satélites</Link>
                    </div>
                </div>
            </div>
            <section className="flex px-24 gap-6 justify-around min-h-fit" id="home">
                <div className="flex px-24 gap-28">
                    <Image src="satelite-example.png" alt="station example" width={500} height={80} />
                </div>
                <div className="flex flex-col py-12 max-w-4xl gap-6">
                    <h1 className="text-text-on-background text-5xl text-white font-black">O que é Solaris?</h1>
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <p className="text-text-on-background text-lg font-bold text-white">O projeto Solaris é uma solução avançada para mapeamento de nuvens e as sombras delas com imagens em forma de satélite, desenvolvida com a finalidade de fornecer análises e automáticas. Utilizando tecnologia de segmentação de imagem com Inteligência Artificial, Solaris é capaz de identificar e, com isso, mapear áreas cobertas por nuvens e suas sombras com alto nível de detalhe e confiabilidade.</p>
                    </div>
                    <h2 className="text-text-on-background text-5xl text-white font-black">Quais as suas Funcionalidades?</h2>
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <p className="text-text-on-background text-lg font-bold text-white">.Segmentação Precisa dos diferentes tipos de imagens de satélite das nuvens e sombras;
                            <br />
                            .Automatização Completa do processo de análise de grandes volumes de dados;
                            <br />
                            .Modelos de IA treinados para detectar padrões complexos em diversos cenários climáticos;
                            <br />
                            .Integração Fácil com ferramentas de processamento de imagem e análise.</p>
                    </div>
                    <h3 className="text-text-on-background text-5xl text-white font-black">Qual a Importância do mapeamento?</h3>
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <p className="text-text-on-background text-lg font-bold text-white">A presença de nuvens nas imagens de satélites poderá comprometer a analise de dados muito importantes para a agricultura, monitoramento ambiental e, consequentemente, o planejamento urbano. Com o projeto Solaris, você consegue obter resultados claros e utilizáveis, removendo qualquer impacto negativo das nuvens sobre os dados analisados.</p>
                    </div>
                    <h4 className="text-text-on-background text-5xl text-white font-black">Quais são seus Benefícios?</h4>
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <p className="text-text-on-background text-lg font-bold text-white">.Melhora na Qualidade dos dados para projetos ambientais, agrícolas e de monitoramentos urbanos;
                            <br />
                            .Automatização Completa do processo de análise de grandes volumes de dados;
                            <br />
                            .Redução de Tempo que será necessário para filtrar ou processar imagens comprometidas por nuvens de forma manual;
                            <br />
                            .Otimização para tomar decisões baseadas em imagens limpas, precisas e consistentes;</p>
                    </div>
                </div>
            </section>
            <div className="ml-96">
                <Link href="/publico/estacoes">
                    <Button variant="primary">Login</Button>
                </Link>
            </div>
            <div className="flex gap-4 justify-center py-6">
                <ScrollLink
                    to="importancia"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer border-4 border-gray-400 text-white bg-neutral-700 px-6 py-2 rounded-full transition-transform transform hover:-translate-y-1 focus:outline-none"
                    style={{ borderColor: '#B2B2B2', color: '#FFFFFF' }}
                >
                    Importância
                </ScrollLink>

                <ScrollLink
                    to="beneficios"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer border-4 border-gray-400 text-white bg-neutral-700 px-6 py-2 rounded-full transition-transform transform hover:-translate-y-1 focus:outline-none"
                    style={{ borderColor: '#B2B2B2', color: '#FFFFFF' }}
                >
                    Benefícios
                </ScrollLink>

                <ScrollLink
                    to="oque"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer border-4 border-gray-400 text-white bg-neutral-700 px-6 py-2 rounded-full transition-transform transform hover:-translate-y-1 focus:outline-none"
                    style={{ borderColor: '#B2B2B2', color: '#FFFFFF' }}
                >
                    O que é?
                </ScrollLink>

                <ScrollLink
                    to="funcionalidades"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer border-4 border-gray-400 text-white bg-neutral-700 px-6 py-2 rounded-full transition-transform transform hover:-translate-y-1 focus:outline-none"
                    style={{ borderColor: '#B2B2B2', color: '#FFFFFF' }}
                >
                    Funcionalidades
                </ScrollLink>
            </div>
        </main>
    );
}