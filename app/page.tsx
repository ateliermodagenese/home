"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Menu,
  X,
  Star,
  Heart,
  Scissors,
  Palette,
  Users,
  Award,
  ArrowRight,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
  Upload,
  Clock,
  CheckCircle,
  Quote,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Sparkles,
} from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function EstilistaWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("todos")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre Mim" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#orcamento", label: "Orçamento" },
    { href: "#produtos", label: "Produtos" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#blog", label: "Blog" },
    { href: "#contato", label: "Contato" },
  ]

  const portfolioItems = [
    {
      id: 1,
      category: "vestidos",
      title: "Vestido de Festa Bordado",
      description:
        "Vestido de festa em tule bordado — projeto exclusivo para cliente particular. Design, modelagem e confecção integral no atelier.",
      year: "2024",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 2,
      category: "casual",
      title: "Conjunto Casual Elegante",
      description: "Conjunto sob medida em linho, perfeito para o dia a dia com elegância e conforto.",
      year: "2024",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 3,
      category: "cortinas",
      title: "Cortinas Personalizadas",
      description: "Cortinas sob medida em tecido importado, transformando completamente o ambiente.",
      year: "2024",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 4,
      category: "noiva",
      title: "Vestido de Noiva Clássico",
      description:
        "Vestido de noiva em seda pura com detalhes em renda francesa, criado especialmente para o grande dia.",
      year: "2023",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 5,
      category: "casa",
      title: "Almofadas Decorativas",
      description: "Conjunto de almofadas personalizadas em tecidos exclusivos para decoração de sala.",
      year: "2024",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 6,
      category: "festa",
      title: "Vestido de Gala",
      description: "Vestido de gala em cetim com aplicações de cristais, para evento especial.",
      year: "2024",
      image: "/placeholder.svg?height=400&width=300",
    },
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      text: "O vestido ficou impecável, e o atendimento foi muito humano e cuidadoso. Recomendo de olhos fechados!",
      rating: 5,
    },
    {
      name: "Ana Costa",
      text: "Fiz cortinas sob medida para meu apartamento inteiro. Resultado maravilhoso! Superou todas as expectativas.",
      rating: 5,
    },
    {
      name: "Juliana Santos",
      text: "Minha experiência foi incrível. O vestido ficou exatamente como imaginei. Profissionalismo exemplar!",
      rating: 5,
    },
    {
      name: "Carla Oliveira",
      text: "Atendimento personalizado e resultado final perfeito. Sirlene é uma verdadeira artista!",
      rating: 5,
    },
  ]

  const blogPosts = [
    {
      title: "Como escolher o vestido sob medida ideal para você",
      excerpt: "Descubra as principais dicas para escolher o vestido perfeito que valorize seu corpo e estilo pessoal.",
      date: "15 Jan 2025",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Tendências em cortinas e decoração em 2025",
      excerpt: "Conheça as principais tendências em decoração e como as cortinas podem transformar seu ambiente.",
      date: "10 Jan 2025",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "O que considerar ao encomendar roupas personalizadas",
      excerpt: "Guia completo sobre o processo de criação de peças sob medida e o que você precisa saber.",
      date: "05 Jan 2025",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const filteredPortfolio =
    activeFilter === "todos" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-rose-100"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent"
            >
              Sirlene Alves
            </motion.div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex space-x-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, color: "#e11d48" }}
                  className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isMenuOpen ? <X /> : <Menu />}
              </motion.div>
            </Button>
          </div>

          {/* Mobile Menu */}
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isMenuOpen ? "auto" : 0,
              opacity: isMenuOpen ? 1 : 0,
            }}
            className="lg:hidden overflow-hidden"
          >
            <div className="py-4 space-y-4">
              {menuItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  className="block text-gray-700 hover:text-rose-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 to-purple-600/20" />
          <Image src="/placeholder.svg?height=800&width=1200" alt="Atelier Background" fill className="object-cover" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent"
              >
                Moda Sob Medida com Exclusividade
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-700 mb-8 leading-relaxed"
              >
                Roupas que expressam sua identidade. Cortinas e artigos personalizados que transformam seu espaço. Tudo
                feito à mão, sob medida para você.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-white px-8 py-6 text-lg group"
                  asChild
                >
                  <a href="#orcamento">
                    Solicite Seu Desenho Personalizado
                    <motion.div className="ml-2" whileHover={{ x: 5 }}>
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Estilista Sirlene"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full flex items-center justify-center"
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Award, text: "10+ Anos", subtitle: "de Experiência" },
              { icon: Users, text: "500+", subtitle: "Clientes Satisfeitos" },
              { icon: Heart, text: "100%", subtitle: "Peças Únicas" },
              { icon: Scissors, text: "Alta", subtitle: "Costura" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/90 backdrop-blur-md rounded-xl p-4 text-center shadow-lg border border-rose-100"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-rose-600" />
                <div className="font-bold text-lg text-gray-800">{stat.text}</div>
                <div className="text-sm text-gray-600">{stat.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Sobre Mim */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Paixão pela moda. Dedicação ao detalhe.
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Sou Sirlene Alves, estilista com mais de uma década de experiência em moda sob medida e decoração
              personalizada. Meu trabalho une criatividade, técnica e um profundo respeito pela individualidade de cada
              cliente.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Sirlene no Atelier"
                width={400}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Cada peça é pensada para valorizar a história e o estilo de quem a veste — ou de quem a vive em seu
                espaço. Acredito que a moda vai além das tendências: ela deve refletir a personalidade única de cada
                pessoa.
              </p>

              {/* Timeline */}
              <div className="space-y-6">
                {[
                  { year: "2013", event: "Primeiro atelier próprio" },
                  { year: "2017", event: "Lançamento da linha de cortinas e artigos para casa" },
                  { year: "2020", event: "Mais de 500 peças sob medida entregues" },
                  { year: "2025", event: "Nova coleção em destaque no blog" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {item.year.slice(-2)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{item.year}</div>
                      <div className="text-gray-600">{item.event}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfólio */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Conheça Minhas Criações
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Cada peça conta uma história única, criada com amor e dedicação aos detalhes.
            </p>
          </motion.div>

          {/* Filtros */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { key: "todos", label: "Todos" },
              { key: "vestidos", label: "Vestidos" },
              { key: "casual", label: "Casual" },
              { key: "festa", label: "Festa" },
              { key: "noiva", label: "Noiva" },
              { key: "cortinas", label: "Cortinas" },
              { key: "casa", label: "Casa" },
            ].map((filter) => (
              <motion.button
                key={filter.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === filter.key
                    ? "bg-gradient-to-r from-rose-600 to-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-rose-50 border border-rose-200"
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Grid de Portfólio */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={300}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-4 right-4 bg-white/90 text-gray-800">{item.year}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Um processo simples e transparente para criar sua peça única
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: Calendar,
                title: "Agende uma Conversa",
                description: "Entre em contato e conte sua ideia. Cada projeto começa com uma boa conversa.",
              },
              {
                step: "02",
                icon: Upload,
                title: "Envie suas Referências",
                description: "Você pode enviar imagens, descrever estilos ou até mesmo trazer tecidos e inspirações.",
              },
              {
                step: "03",
                icon: Palette,
                title: "Receba seu Desenho",
                description: "Com base no briefing, criarei o desenho e projeto técnico para sua aprovação.",
              },
              {
                step: "04",
                icon: Scissors,
                title: "A Confecção Começa!",
                description: "Após sua aprovação, dou início à confecção. Você acompanha o processo de perto.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center group"
              >
                <Card className="p-8 h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-rose-50/50">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <section id="orcamento" className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Solicitar Orçamento
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Conte-me sua ideia e vamos criar algo único juntas
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-8 shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="nome" className="text-gray-700 font-medium">
                      Nome Completo
                    </Label>
                    <Input id="nome" placeholder="Seu nome completo" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      E-mail
                    </Label>
                    <Input id="email" type="email" placeholder="seu@email.com" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="whatsapp" className="text-gray-700 font-medium">
                    WhatsApp
                  </Label>
                  <Input id="whatsapp" placeholder="(00) 00000-0000" className="mt-2" />
                </div>

                <div>
                  <Label className="text-gray-700 font-medium">Tipo de Peça</Label>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {["Roupa", "Cortina", "Artigo para casa"].map((tipo) => (
                      <label key={tipo} className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-gray-700">{tipo}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="medidas" className="text-gray-700 font-medium">
                    Medidas (opcional)
                  </Label>
                  <Textarea id="medidas" placeholder="Informe suas medidas se já souber..." className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="referencia" className="text-gray-700 font-medium">
                    Upload de Referência
                  </Label>
                  <div className="mt-2 border-2 border-dashed border-rose-300 rounded-lg p-8 text-center hover:border-rose-400 transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 mx-auto text-rose-400 mb-4" />
                    <p className="text-gray-600">Clique para enviar imagens ou arraste aqui</p>
                    <p className="text-sm text-gray-500 mt-2">PNG, JPG até 10MB</p>
                  </div>
                </div>

                <div>
                  <Label htmlFor="descricao" className="text-gray-700 font-medium">
                    Descrição da Ideia
                  </Label>
                  <Textarea
                    id="descricao"
                    placeholder="Conte-me sobre sua ideia, estilo desejado, ocasião de uso..."
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-white py-6 text-lg"
                  >
                    Solicitar Meu Orçamento
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Produtos Sob Medida */}
      <section id="produtos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Produtos Sob Medida
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Cada item é confeccionado com o mesmo cuidado e atenção aos detalhes que aplico às minhas peças de moda
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Tabs defaultValue="roupas" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="roupas" className="text-lg">
                  Roupas Sob Medida
                </TabsTrigger>
                <TabsTrigger value="cortinas" className="text-lg">
                  Cortinas
                </TabsTrigger>
                <TabsTrigger value="casa" className="text-lg">
                  Artigos para Casa
                </TabsTrigger>
              </TabsList>

              <TabsContent value="roupas" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Vestidos de Festa",
                      description: "Vestidos únicos para ocasiões especiais, criados especialmente para você.",
                      image: "/placeholder.svg?height=300&width=400",
                    },
                    {
                      title: "Vestidos de Noiva",
                      description: "O vestido dos seus sonhos para o dia mais importante da sua vida.",
                      image: "/placeholder.svg?height=300&width=400",
                    },
                    {
                      title: "Moda Casual",
                      description: "Peças confortáveis e elegantes para o seu dia a dia.",
                      image: "/placeholder.svg?height=300&width=400",
                    },
                    {
                      title: "Moda Corporativa",
                      description: "Looks profissionais que transmitem confiança e elegância.",
                      image: "/placeholder.svg?height=300&width=400",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all">
                        <div className="md:flex">
                          <div className="md:w-1/2">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              width={400}
                              height={300}
                              className="w-full h-48 md:h-full object-cover"
                            />
                          </div>
                          <div className="md:w-1/2 p-6 flex flex-col justify-center">
                            <h3 className="font-bold text-xl mb-3 text-gray-800">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="cortinas" className="space-y-6">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                  <Card className="p-8 border-0 shadow-lg">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <Image
                          src="/placeholder.svg?height=400&width=500"
                          alt="Cortinas Personalizadas"
                          width={500}
                          height={400}
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold text-2xl mb-4 text-gray-800">Cortinas Sob Medida</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          Transforme seus ambientes com cortinas personalizadas. Trabalho com diversos tecidos e
                          estilos, desde cortinas clássicas até modelos mais modernos e minimalistas.
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            Medição e instalação incluídas
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            Variedade de tecidos importados
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            Acabamento profissional
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="casa" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Almofadas Personalizadas",
                      description: "Almofadas únicas para decorar sua casa com estilo.",
                      image: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      title: "Roupas de Cama",
                      description: "Jogos de cama exclusivos em tecidos de alta qualidade.",
                      image: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      title: "Colchas Decorativas",
                      description: "Colchas artesanais que transformam seu quarto.",
                      image: "/placeholder.svg?height=200&width=300",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                        <CardContent className="p-6">
                          <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              O Que Dizem Minhas Clientes
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              A satisfação das minhas clientes é minha maior recompensa
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative"
          >
            <Card className="p-8 md:p-12 border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <div className="text-center">
                <Quote className="w-16 h-16 text-rose-300 mx-auto mb-6" />

                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="mb-8"
                >
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>

                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="font-semibold text-lg text-gray-800">{testimonials[currentTestimonial].name}</p>
                </motion.div>

                <div className="flex justify-center space-x-2 mb-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentTestimonial ? "bg-rose-500 w-8" : "bg-rose-200 hover:bg-rose-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                    className="rounded-full border-rose-200 hover:bg-rose-50"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                    className="rounded-full border-rose-200 hover:bg-rose-50"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Estilo & Dicas
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Dicas de moda, bastidores do atelier e as últimas tendências
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-rose-600 font-medium mb-2">{post.date}</div>
                    <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-rose-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                    <div className="mt-4 flex items-center text-rose-600 font-medium group-hover:translate-x-2 transition-transform">
                      Ler mais <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Vamos Conversar?
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">Entre em contato e vamos criar algo único juntas</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Informações de Contato</h3>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">WhatsApp</div>
                      <div className="text-gray-600">(37) 99999-9999</div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">E-mail</div>
                      <div className="text-gray-600">contato@sirlenealves.com</div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Endereço</div>
                      <div className="text-gray-600">Rua Teste, 32 - Divinópolis/MG</div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Horário</div>
                      <div className="text-gray-600">Segunda a Sexta, 10h às 18h</div>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-gray-800 mb-4">Redes Sociais</h4>
                  <div className="flex space-x-4">
                    {[
                      { icon: Instagram, href: "#", label: "Instagram" },
                      { icon: Facebook, href: "#", label: "Facebook" },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                        aria-label={social.label}
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulário de Contato */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="p-8 border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Envie uma Mensagem</h3>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-nome">Nome</Label>
                      <Input id="contact-nome" placeholder="Seu nome" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">E-mail</Label>
                      <Input id="contact-email" type="email" placeholder="seu@email.com" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contact-assunto">Assunto</Label>
                    <Input id="contact-assunto" placeholder="Assunto da mensagem" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="contact-mensagem">Mensagem</Label>
                    <Textarea id="contact-mensagem" placeholder="Sua mensagem..." className="mt-1 min-h-[120px]" />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-white"
                    >
                      Enviar Mensagem
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </div>

          {/* WhatsApp Flutuante */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.a
              href="https://wa.me/5537999999999"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-3xl transition-shadow"
            >
              <MessageCircle className="w-8 h-8" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Sirlene Alves
              </div>
              <p className="text-gray-400 leading-relaxed">
                Estilista especializada em moda sob medida e decoração personalizada. Criando peças únicas há mais de 10
                anos.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2">
                {["Home", "Portfólio", "Blog", "Contato"].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-rose-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <div>Rua Teste, 32</div>
                <div>Divinópolis/MG - 00.000-00</div>
                <div>(37) 99999-9999</div>
                <div>contato@sirlenealves.com</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
              <div className="text-gray-400">
                <div>Segunda a Sexta</div>
                <div>10h às 18h</div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Instagram, href: "#" },
                    { icon: Facebook, href: "#" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -2 }}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-rose-400 hover:bg-gray-700 transition-all"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="text-center text-gray-400">
            <p>&copy; 2025 Sirlene Alves. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
