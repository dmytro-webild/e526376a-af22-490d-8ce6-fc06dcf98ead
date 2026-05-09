"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextAbout from '@/components/sections/about/TextAbout';
import { Award, Fish, Sun } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="medium"
        background="noise"
        cardStyle="inset"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Início",          id: "hero"},
        {
          name: "Sobre",          id: "about"},
        {
          name: "Menu",          id: "menu"},
        {
          name: "Contato",          id: "contact"},
      ]}
      brandName="Telvina Beach"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "gradient-bars"}}
      title="Sabor e Tradição na Beira do Mar"
      description="Desfrute do melhor da culinária local em um ambiente paradisíaco. Telvina Beach Lodge: onde cada refeição é uma experiência inesquecível."
      leftCarouselItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DThW1ChEaxahFhJ6zkGArnPknY/uploaded-1778312080345-jqecr4f7.png",          imageAlt: "Ambiente paradisíaco"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DThW1ChEaxahFhJ6zkGArnPknY/uploaded-1778312080346-0kc9p27v.png",          imageAlt: "Vista da praia"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DThW1ChEaxahFhJ6zkGArnPknY/uploaded-1778312080346-q57d0vcq.png",          imageAlt: "Detalhe lodge"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DThW1ChEaxahFhJ6zkGArnPknY/uploaded-1778312080346-odjwk1xl.png",          imageAlt: "Ambiente externo"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-brazilian-food-plate_23-2148875210.jpg",          imageAlt: "Refeição premium"},
      ]}
      rightCarouselItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DThW1ChEaxahFhJ6zkGArnPknY/uploaded-1778312080346-q57d0vcq.png",          imageAlt: "Prato de caranguejo"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DThW1ChEaxahFhJ6zkGArnPknY/uploaded-1778312080346-odjwk1xl.png",          imageAlt: "Detalhe culinário"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DThW1ChEaxahFhJ6zkGArnPknY/uploaded-1778312080345-jqecr4f7.png",          imageAlt: "Gastronomia premium"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DThW1ChEaxahFhJ6zkGArnPknY/uploaded-1778312080346-0kc9p27v.png",          imageAlt: "Serviço profissional"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-brazilian-food-plate_23-2148875210.jpg",          imageAlt: "Prato tradicional"},
      ]}
      buttons={[
        {
          text: "Ligar Agora",          href: "tel:+258000000000"},
        {
          text: "Solicitar Orçamento",          href: "#contact"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/blonde-woman-sitting-cafe_273609-5102.jpg",          alt: "Diner 1"},
        {
          src: "http://img.b2bpic.net/free-photo/stylish-friends-sitting-cafe_273609-5476.jpg",          alt: "Diner 2"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-happy-family-with-kid_23-2149001349.jpg",          alt: "Diner 3"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-friends-chatting-indoors_23-2149116778.jpg",          alt: "Diner 4"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-smiley-people-table_23-2149001328.jpg",          alt: "Diner 5"},
      ]}
      avatarText="Mais de 10.000 clientes satisfeitos"
      marqueeItems={[
        {
          type: "text",          text: "Frescor garantido"},
        {
          type: "text",          text: "Localização premium"},
        {
          type: "text",          text: "Atendimento VIP"},
        {
          type: "text",          text: "Tradição em Inhambane"},
        {
          type: "text",          text: "Sabor inesquecível"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      title="Tradição e Hospitalidade no Coração de Inhambane"
      buttons={[
        {
          text: "Saiba mais",          href: "#contact"},
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Ingredientes Frescos",          description: "Frutos do mar selecionados diariamente da nossa costa.",          icon: Fish,
          mediaItems: [
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DThW1ChEaxahFhJ6zkGArnPknY/uploaded-1778312080346-q57d0vcq.png"},
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DThW1ChEaxahFhJ6zkGArnPknY/uploaded-1778312080346-odjwk1xl.png"},
          ]
        },
        {
          title: "Ambiente Único",          description: "Conforto total com vista para o mar em Inhambane.",          icon: Sun,
          mediaItems: [
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DThW1ChEaxahFhJ6zkGArnPknY/uploaded-1778312080346-0kc9p27v.png"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-brazilian-food-plate_23-2148875210.jpg"},
          ]
        },
        {
          title: "Atendimento VIP",          description: "Equipe treinada para garantir uma experiência premium.",          icon: Award,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/mediterranean-food-smoked-herring-fish-served-with-green-onion-lemon-cherry-tomatoes-spices-bread-tahini-sauce-dark-top-view-with-close-up_114579-28.jpg"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/steamed-mussel-with-white-wine-sauce_74190-911.jpg"},
          ]
        },
      ]}
      title="Por que nos escolher?"
      description="Qualidade, frescor e um atendimento humano em cada detalhe."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          brand: "Especial",          name: "Caranguejo ao Molho",          price: "1200 MZN",          rating: 5,
          reviewCount: "120",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-brazilian-food-plate_23-2148875210.jpg"},
        {
          id: "p2",          brand: "Especial",          name: "Peixe Grelhado",          price: "950 MZN",          rating: 5,
          reviewCount: "89",          imageSrc: "http://img.b2bpic.net/free-photo/plate-shrimp-caesar-salad-restaurant-terrace_140725-4914.jpg"},
        {
          id: "p3",          brand: "Especial",          name: "Mariscada Completa",          price: "2500 MZN",          rating: 5,
          reviewCount: "210",          imageSrc: "http://img.b2bpic.net/free-photo/mediterranean-food-smoked-herring-fish-served-with-green-onion-lemon-cherry-tomatoes-spices-bread-tahini-sauce-dark-top-view-with-close-up_114579-28.jpg"},
        {
          id: "p4",          brand: "Especial",          name: "Camarão ao Alho",          price: "1500 MZN",          rating: 4,
          reviewCount: "56",          imageSrc: "http://img.b2bpic.net/free-photo/steamed-mussel-with-white-wine-sauce_74190-911.jpg"},
        {
          id: "p5",          brand: "Especial",          name: "Lagosta Fresca",          price: "3200 MZN",          rating: 5,
          reviewCount: "45",          imageSrc: "http://img.b2bpic.net/free-photo/uncooked-meat-piece-with-vegetables-blue-table-o-oil-tomato-paste_114579-14703.jpg"},
        {
          id: "p6",          brand: "Especial",          name: "Combo Telvina",          price: "2800 MZN",          rating: 5,
          reviewCount: "150",          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-food-frame-mediterranean-diet-with-mussels_23-2148234943.jpg"},
      ]}
      title="Nossas Especialidades"
      description="Pratos típicos preparados com o toque especial do nosso chef."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "10k+",          title: "Clientes Satisfeitos",          items: [
            "Atendimento de excelência",            "Feedback positivo constante"],
        },
        {
          id: "m2",          value: "5/5",          title: "Avaliação Google",          items: [
            "Qualidade comprovada",            "Ambiência elogiada"],
        },
        {
          id: "m3",          value: "10+",          title: "Anos de História",          items: [
            "Tradição local",            "Fundação sólida"],
        },
      ]}
      title="Confiança Construída"
      description="Anos de história servindo bem os nossos clientes em Inhambane."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          name: "Maria Silva",          role: "Turista",          testimonial: "Melhor caranguejo da costa. O ambiente é maravilhoso!",          imageSrc: "http://img.b2bpic.net/free-photo/young-adult-having-fun-white-party_23-2149575126.jpg"},
        {
          id: "t2",          name: "João Pereira",          role: "Cliente local",          testimonial: "Excelente atendimento e comida sempre fresca.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-adults-kid-outside_23-2149001321.jpg"},
        {
          id: "t3",          name: "Ana Souza",          role: "Visitante",          testimonial: "Um lugar que sempre retorno. Atmosfera perfeita.",          imageSrc: "http://img.b2bpic.net/free-photo/two-happy-cheerful-girl-friends-business-partners-having-fun-lunch-seafood-restaurant_496169-2077.jpg"},
        {
          id: "t4",          name: "Carlos M.",          role: "Turista",          testimonial: "O serviço é rápido e o peixe é incrível.",          imageSrc: "http://img.b2bpic.net/free-photo/brazilian-woman-having-guarana-drink-outdoors_23-2150765642.jpg"},
        {
          id: "t5",          name: "Luísa Ferreira",          role: "Cliente fiel",          testimonial: "Telvina é sinônimo de qualidade e hospitalidade.",          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-couple-playing-beach_1153-813.jpg"},
      ]}
      title="O que dizem os nossos clientes"
      description="Experiências reais que confirmam nosso compromisso."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "Quais os horários?",          content: "Abrimos diariamente das 08:00 às 22:00."},
        {
          id: "f2",          title: "Como reservar?",          content: "Pode ligar ou enviar uma mensagem via WhatsApp."},
        {
          id: "f3",          title: "Aceitam cartões?",          content: "Sim, aceitamos cartões de débito e crédito locais."},
        {
          id: "f4",          title: "Onde estamos?",          content: "Localizados na praia de Inhambane."},
      ]}
      title="Perguntas Frequentes"
      description="Tire todas as suas dúvidas sobre nossos serviços."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="Contato"
      title="Entre em contato agora"
      description="Solicite o seu orçamento ou reserve a sua mesa hoje mesmo."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Links",          items: [
            {
              label: "Início",              href: "#hero"},
            {
              label: "Sobre",              href: "#about"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacidade",              href: "#"},
            {
              label: "Termos",              href: "#"},
          ],
        },
      ]}
      logoText="Telvina Beach Lodge"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
