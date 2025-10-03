'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Shield,
  Wallet,
  FileText,
  AlertTriangle,
  Link2,
  Lock,
  Gift,
  Code,
  Bell,
  CheckCircle2,
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
  viewport: { once: true, amount: 0.2 },
};

export default function Home() {
  const networkLogos = [
    {
      src: '/networks/algorand_full_logo_white.png',
      top: '15%',
      left: '9%',
      size: 130,
      delay: 0,
    },
    {
      src: '/networks/Aptos_Primary_WHT.png',
      top: '20%',
      left: '80%',
      size: 110,
      delay: 0.6,
    },
    {
      src: '/networks/AvalancheLogo_Horizontal_1C_White.png',
      top: '50%',
      left: '6%',
      size: 140,
      delay: 1.2,
    },
    {
      src: '/networks/Base_lockup_white.png',
      top: '78%',
      left: '88%',
      size: 110,
      delay: 0.2,
    },
    {
      src: '/networks/ethereum-logo-landscape-purple.2c091489.png',
      top: '78%',
      left: '50%',
      size: 150,
      delay: 0.9,
    },
    {
      src: '/networks/Juniper_Networks_Dark_Logo.svg',
      top: '15%',
      left: '58%',
      size: 110,
      delay: 0.3,
    },
    {
      src: '/networks/Size=36_Color=white@2x.png',
      top: '82%',
      left: '8%',
      size: 140,
      delay: 1.5,
    },
    {
      src: '/networks/Stellar-Logo-Final-RGB.png',
      top: '46%',
      left: '87%',
      size: 140,
      delay: 0.4,
    },
    {
      src: '/networks/Sui_Logo_White.png',
      top: '10%',
      left: '34%',
      size: 100,
      delay: 1.1,
    },
  ];
  function handleWaitlistSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get('email') || '').trim();
    // Placeholder: send to backend later
    // eslint-disable-next-line no-console
    console.log({ email });
    event.currentTarget.reset();
  }

  return (
    <main className="min-h-dvh bg-[var(--background)] text-[var(--color-text)]">
      {/* Navbar */}
      {/* <header className="border-b border-[var(--color-muted)]/30 bg-[color:var(--background)/0.6] backdrop-blur supports-[backdrop-filter]:bg-[color:var(--background)/0.5]">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Rugsense logo"
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="text-sm font-semibold text-[var(--color-ink)]">
              Rugsense
            </span>
          </a>
          <nav className="flex items-center gap-4">
            <a
              href="#how"
              className="hidden text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] sm:inline"
            >
              How it works
            </a>
            <a
              href="#features"
              className="hidden text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] sm:inline"
            >
              Features
            </a>
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40"
            >
              Join waitlist
            </a>
          </nav>
        </div>
      </header> */}

      {/* Hero */}
      <section className="relative w-full min-h-dvh overflow-hidden rounded-3xl bg-[color:var(--color-ink)/0.8] px-4 py-12 sm:py-16 flex items-center">
        {/* Floating networks background */}
        <div className="absolute inset-0 z-0" aria-hidden>
          {networkLogos.map((logo, idx) => (
            <motion.div
              key={logo.src}
              className="absolute cursor-pointer z-10"
              style={{ top: logo.top, left: logo.left }}
              initial={{ opacity: 0, y: 10, rotate: -2, scale: 0.9 }}
              animate={{
                opacity: 0.25,
                y: [0, -14, 0],
                rotate: [0, 4, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 7 + (idx % 3),
                repeat: Infinity,
                delay: logo.delay,
                ease: [0.36, 0.66, 0.04, 1],
              }}
            >
              <Image
                src={logo.src}
                alt=""
                width={logo.size}
                height={logo.size}
                className="opacity-50 grayscale blur-[0.2px] hover:opacity-100 hover:grayscale-0  hover:blur-none hover:scale-[1.6] transition-all duration-500 transform sm:scale-110 md:scale-125 lg:scale-[1.4] drop-shadow-[0_0_25px_rgba(38,191,206,0.7)] hover:drop-shadow-[0_0_35px_rgba(38,191,206,1)]"
                priority={idx < 4}
              />
            </motion.div>
          ))}
        </div>
        <div className="relative z-30 container mx-auto max-w-5xl">
          <div className="grid items-center gap-8">
            <div className="text-center">
              <motion.div
                className="mx-auto mb-4 inline-block"
                initial={fadeUp.initial}
                whileInView={fadeUp.whileInView}
                transition={{ ...fadeUp.transition, delay: 0.03 }}
                viewport={fadeUp.viewport}
              >
                <Image
                  src="/logo.png"
                  alt="Rugsense logo"
                  width={180}
                  height={180}
                  className="mx-auto"
                  priority
                />
              </motion.div>
              <motion.h1
                className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl"
                initial={fadeUp.initial}
                whileInView={fadeUp.whileInView}
                transition={{ ...fadeUp.transition, delay: 0.05 }}
                viewport={fadeUp.viewport}
              >
                Secure your Web3 journey with{' '}
                <span className="text-[var(--color-primary)]">RUGSENSE</span>
              </motion.h1>
              <motion.p
                className="mt-4 text-base text-[var(--foreground)]/90 sm:text-lg"
                initial={fadeUp.initial}
                whileInView={fadeUp.whileInView}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                viewport={fadeUp.viewport}
              >
                Protect your digital assets with real-time smart contract
                analysis. We shield you from potential security risks in
                decentralized applications.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center"
                initial={fadeUp.initial}
                whileInView={fadeUp.whileInView}
                transition={{ ...fadeUp.transition, delay: 0.15 }}
                viewport={fadeUp.viewport}
              >
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center rounded-2xl bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[#0b1a2f] shadow-lg transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40"
                >
                  Join the waitlist
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center justify-center rounded-2xl border border-[var(--color-muted)]/40 bg-[color:var(--background)/0.4] px-6 py-3 text-sm font-semibold text-[var(--color-text)] shadow-lg transition hover:bg-[color:var(--background)/0.6]"
                >
                  See how it works
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative container mx-auto bg-gradient-to-br from-[color:var(--color-primary)/0.05] via-[color:var(--color-primary)/0.02] to-[color:var(--background)] px-4 py-20 sm:py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(38,191,206,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(38,191,206,0.04),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[color:var(--color-primary)/0.02] to-transparent" />

        <div className="relative mx-auto max-w-6xl text-center">
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={fadeUp.transition}
            viewport={fadeUp.viewport}
          >
            <div className="relative mb-12">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary)]/10 to-[var(--color-primary)]/20 rounded-2xl blur-xl"></div>
              <h2 className="relative text-4xl font-bold sm:text-5xl lg:text-6xl bg-gradient-to-r from-[var(--color-text)] via-[var(--color-primary)] to-[var(--color-text)] bg-clip-text text-transparent drop-shadow-2xl">
                Security Challenges
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent rounded-full"></div>
            </div>
            <p className="text-xl text-[var(--foreground)]/80 sm:text-2xl max-w-4xl mx-auto leading-relaxed">
              Signing transactions is risky when the UI hides what really
              happens on-chain. A single click can grant unlimited token
              allowances, execute malicious delegatecalls, or drain assets via
              phishing dApps.
            </p>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div
                className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-br from-[color:var(--color-primary)/0.08] to-[color:var(--color-primary)/0.04] border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)/0.05] via-transparent to-[color:var(--color-primary)/0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)/0.15] to-[color:var(--color-primary)/0.08] mb-6 group-hover:bg-gradient-to-br group-hover:from-[color:var(--color-primary)/0.25] group-hover:to-[color:var(--color-primary)/0.15] transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <AlertTriangle className="h-10 w-10 text-[var(--color-primary)] drop-shadow-lg" />
                </div>
                <h3 className="relative text-xl font-bold mb-3 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  Hidden reentrancy
                </h3>
                <p className="relative text-[var(--foreground)]/80 leading-relaxed group-hover:text-[var(--foreground)]/90 transition-colors duration-300">
                  and state changes that can drain your wallet
                </p>
              </motion.div>
              <motion.div
                className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-br from-[color:var(--color-primary)/0.08] to-[color:var(--color-primary)/0.04] border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)/0.05] via-transparent to-[color:var(--color-primary)/0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)/0.15] to-[color:var(--color-primary)/0.08] mb-6 group-hover:bg-gradient-to-br group-hover:from-[color:var(--color-primary)/0.25] group-hover:to-[color:var(--color-primary)/0.15] transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Link2 className="h-10 w-10 text-[var(--color-primary)] drop-shadow-lg" />
                </div>
                <h3 className="relative text-xl font-bold mb-3 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  Malicious approvals
                </h3>
                <p className="relative text-[var(--foreground)]/80 leading-relaxed group-hover:text-[var(--foreground)]/90 transition-colors duration-300">
                  and proxy calls that steal your tokens
                </p>
              </motion.div>
              <motion.div
                className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-br from-[color:var(--color-primary)/0.08] to-[color:var(--color-primary)/0.04] border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 transition-all duration-500 hover:-translate-y-2 sm:col-span-2 lg:col-span-1 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)/0.05] via-transparent to-[color:var(--color-primary)/0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)/0.15] to-[color:var(--color-primary)/0.08] mb-6 group-hover:bg-gradient-to-br group-hover:from-[color:var(--color-primary)/0.25] group-hover:to-[color:var(--color-primary)/0.15] transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Bell className="h-10 w-10 text-[var(--color-primary)] drop-shadow-lg" />
                </div>
                <h3 className="relative text-xl font-bold mb-3 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  Phishing sites
                </h3>
                <p className="relative text-[var(--foreground)]/80 leading-relaxed group-hover:text-[var(--foreground)]/90 transition-colors duration-300">
                  mimicking trusted brands to trick users
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative container mx-auto bg-gradient-to-br from-[color:var(--background)] via-[color:var(--color-primary)/0.02] to-[color:var(--color-primary)/0.05] px-4 py-20 sm:py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(38,191,206,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,rgba(38,191,206,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-[color:var(--color-primary)/0.02] to-transparent" />

        <div className="relative mx-auto max-w-6xl text-center">
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={fadeUp.transition}
            viewport={fadeUp.viewport}
          >
            <div className="relative mb-12">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary)]/10 to-[var(--color-primary)]/20 rounded-2xl blur-xl"></div>
              <h2 className="relative text-4xl font-bold sm:text-5xl lg:text-6xl bg-gradient-to-r from-[var(--color-text)] via-[var(--color-primary)] to-[var(--color-text)] bg-clip-text text-transparent drop-shadow-2xl">
                Our Solution
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent rounded-full"></div>
            </div>
            <p className="text-xl text-[var(--foreground)]/80 sm:text-2xl max-w-4xl mx-auto leading-relaxed">
              Rugsense analyzes contract bytecode, ABI, and call data live in
              your browser. It clarifies what a transaction will do and warns
              you in plain language before you sign.
            </p>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div
                className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-br from-[color:var(--color-primary)/0.08] to-[color:var(--color-primary)/0.04] border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)/0.05] via-transparent to-[color:var(--color-primary)/0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)/0.15] to-[color:var(--color-primary)/0.08] mb-6 group-hover:bg-gradient-to-br group-hover:from-[color:var(--color-primary)/0.25] group-hover:to-[color:var(--color-primary)/0.15] transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Shield className="h-10 w-10 text-[var(--color-primary)] drop-shadow-lg" />
                </div>
                <h3 className="relative text-xl font-bold mb-3 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  Risk scoring
                </h3>
                <p className="relative text-[var(--foreground)]/80 leading-relaxed group-hover:text-[var(--foreground)]/90 transition-colors duration-300">
                  and human-readable summaries for every transaction
                </p>
              </motion.div>
              <motion.div
                className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-br from-[color:var(--color-primary)/0.08] to-[color:var(--color-primary)/0.04] border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)/0.05] via-transparent to-[color:var(--color-primary)/0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)/0.15] to-[color:var(--color-primary)/0.08] mb-6 group-hover:bg-gradient-to-br group-hover:from-[color:var(--color-primary)/0.25] group-hover:to-[color:var(--color-primary)/0.15] transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Lock className="h-10 w-10 text-[var(--color-primary)] drop-shadow-lg" />
                </div>
                <h3 className="relative text-xl font-bold mb-3 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  Approval scope checks
                </h3>
                <p className="relative text-[var(--foreground)]/80 leading-relaxed group-hover:text-[var(--foreground)]/90 transition-colors duration-300">
                  and spending limits to protect your assets
                </p>
              </motion.div>
              <motion.div
                className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-br from-[color:var(--color-primary)/0.08] to-[color:var(--color-primary)/0.04] border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 transition-all duration-500 hover:-translate-y-2 sm:col-span-2 lg:col-span-1 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)/0.05] via-transparent to-[color:var(--color-primary)/0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)/0.15] to-[color:var(--color-primary)/0.08] mb-6 group-hover:bg-gradient-to-br group-hover:from-[color:var(--color-primary)/0.25] group-hover:to-[color:var(--color-primary)/0.15] transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Gift className="h-10 w-10 text-[var(--color-primary)] drop-shadow-lg" />
                </div>
                <h3 className="relative text-xl font-bold mb-3 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  Rewards for safety
                </h3>
                <p className="relative text-[var(--foreground)]/80 leading-relaxed group-hover:text-[var(--foreground)]/90 transition-colors duration-300">
                  via token incentives for secure behavior
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how"
        className="relative container mx-auto px-4 py-20 sm:py-24 overflow-visible"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(38,191,206,0.03),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[color:var(--color-primary)/0.01] to-transparent" />

        <div className="relative mx-auto max-w-6xl text-center">
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={fadeUp.transition}
            viewport={fadeUp.viewport}
          >
            <div className="relative mb-12">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary)]/10 to-[var(--color-primary)]/20 rounded-2xl blur-xl"></div>
              <h2 className="relative text-4xl font-bold sm:text-5xl lg:text-6xl bg-gradient-to-r from-[var(--color-text)] via-[var(--color-primary)] to-[var(--color-text)] bg-clip-text text-transparent drop-shadow-2xl">
                How It Works
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent rounded-full"></div>
            </div>
            <p className="text-xl text-[var(--foreground)]/80 sm:text-2xl max-w-3xl mx-auto leading-relaxed">
              Get started with Rugsense in three simple steps
            </p>
          </motion.div>
        </div>
        <div className="relative mx-auto mt-40 max-w-7xl overflow-visible">
          {/* Connecting Lines - Enhanced */}
          <div className="hidden lg:block absolute -top-8 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)]/60 to-transparent z-10"></div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
            {[
              {
                icon: Wallet,
                title: 'Install & connect',
                desc: 'Add Rugsense to your browser and connect your wallet like usual.',
                step: '01',
              },
              {
                icon: FileText,
                title: 'Analyze in real-time',
                desc: 'We inspect bytecode and calldata to predict effects before they happen.',
                step: '02',
              },
              {
                icon: CheckCircle2,
                title: 'Decide with clarity',
                desc: 'Approve confidently or reject risky actions with clear, plain-English alerts.',
                step: '03',
              },
            ].map((step, idx) => (
              <motion.div
                key={step.title}
                className="group relative flex flex-col items-center text-center p-10 pt-20 rounded-3xl bg-gradient-to-br from-[color:var(--color-primary)/0.12] to-[color:var(--color-primary)/0.06] border-2 border-[var(--color-primary)]/30 hover:border-[var(--color-primary)]/60 hover:shadow-2xl hover:shadow-[var(--color-primary)]/30 transition-all duration-500 hover:-translate-y-3 overflow-visible"
                initial={fadeUp.initial}
                whileInView={fadeUp.whileInView}
                transition={{ ...fadeUp.transition, delay: 0.1 * idx }}
                viewport={fadeUp.viewport}
                whileHover={{ scale: 1.05 }}
              >
                {/* Step Number - Much More Prominent */}
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary)]/95 to-[var(--color-primary)]/85 text-white font-black text-4xl flex items-center justify-center shadow-2xl z-50 border-8 border-[var(--background)] ring-4 ring-[var(--color-primary)]/50">
                  {step.step}
                </div>

                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)/0.08] via-transparent to-[color:var(--color-primary)/0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-[var(--color-primary)]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon Container - Enhanced */}
                <div className="relative p-6 rounded-3xl bg-gradient-to-br from-[color:var(--color-primary)/0.2] to-[color:var(--color-primary)/0.12] mb-8 group-hover:bg-gradient-to-br group-hover:from-[color:var(--color-primary)/0.3] group-hover:to-[color:var(--color-primary)/0.2] transition-all duration-300 shadow-xl group-hover:shadow-2xl border border-[var(--color-primary)]/20">
                  <step.icon className="h-12 w-12 text-[var(--color-primary)] drop-shadow-lg" />
                </div>

                {/* Content */}
                <h3 className="relative text-2xl font-bold mb-4 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="relative text-lg text-[var(--foreground)]/80 leading-relaxed group-hover:text-[var(--foreground)]/90 transition-colors duration-300">
                  {step.desc}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section
        id="features"
        className="relative container mx-auto px-4 py-20 sm:py-24 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)/0.03] via-transparent to-[color:var(--color-primary)/0.05]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(38,191,206,0.04),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(38,191,206,0.03),transparent_60%)]"></div>

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={fadeUp.transition}
            viewport={fadeUp.viewport}
          >
            <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl bg-gradient-to-r from-[var(--color-text)] to-[var(--color-primary)] bg-clip-text text-transparent">
              Powerful Security Features
            </h2>
            <p className="mt-6 text-xl text-[var(--foreground)]/80 sm:text-2xl max-w-4xl mx-auto leading-relaxed">
              Advanced protection mechanisms that keep your assets safe across
              all DeFi interactions
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: 'Risk alerts',
                desc: 'Detect reentrancy, delegatecall misuse, and suspicious state changes instantly.',
              },
              {
                icon: Link2,
                title: 'Approval safety',
                desc: 'Catch unlimited token approvals and suggest safer allowances.',
              },
              {
                icon: Code,
                title: 'Contract clarity',
                desc: 'Readable summaries of functions, params, and expected effects.',
              },
              {
                icon: Lock,
                title: 'Phishing defense',
                desc: 'Warns on spoofed domains and malicious front-ends before you connect.',
              },
              {
                icon: Bell,
                title: 'Real-time notifications',
                desc: 'Non-intrusive prompts right when you need them, not after.',
              },
              {
                icon: Gift,
                title: 'Rewards for safety',
                desc: 'Earn tokens for safe behavior across DeFi, NFTs, and dApps.',
              },
            ].map((f, idx) => (
              <motion.div
                key={f.title}
                className="group relative flex flex-col p-8 rounded-3xl bg-gradient-to-br from-[color:var(--color-primary)/0.08] to-[color:var(--color-primary)/0.04] border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                initial={fadeUp.initial}
                whileInView={fadeUp.whileInView}
                transition={{ ...fadeUp.transition, delay: 0.1 * idx }}
                viewport={fadeUp.viewport}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)/0.05] via-transparent to-[color:var(--color-primary)/0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon Container */}
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)/0.15] to-[color:var(--color-primary)/0.08] mb-6 group-hover:bg-gradient-to-br group-hover:from-[color:var(--color-primary)/0.25] group-hover:to-[color:var(--color-primary)/0.15] transition-all duration-300 shadow-lg group-hover:shadow-xl w-fit">
                  <f.icon className="h-8 w-8 text-[var(--color-primary)] drop-shadow-lg" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold mb-3 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="relative text-[var(--foreground)]/80 leading-relaxed group-hover:text-[var(--foreground)]/90 transition-colors duration-300">
                  {f.desc}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA: Waitlist */}
      <section id="waitlist" className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl rounded-2xl border border-[var(--color-primary)]/30 bg-[color:var(--color-primary)/0.08] p-6 sm:p-8 shadow-lg">
          <motion.h2
            className="text-center text-2xl font-bold text-[var(--color-text)] sm:text-3xl"
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={fadeUp.transition}
            viewport={fadeUp.viewport}
          >
            Get early access
          </motion.h2>
          <motion.p
            className="mt-2 text-center text-[var(--color-ink)]"
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            viewport={fadeUp.viewport}
          >
            Join the waitlist to be among the first to try Rugsense when the
            extension goes live.
          </motion.p>
          <motion.form
            onSubmit={handleWaitlistSubmit}
            className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]"
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            viewport={fadeUp.viewport}
            aria-label="Join the waitlist"
          >
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@wallet.xyz"
              className="w-full rounded-2xl border border-[var(--color-primary)]/30 bg-[color:var(--background)/0.8] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40"
            >
              Join waitlist
            </button>
          </motion.form>
          <p className="mt-3 text-center text-xs text-[var(--color-muted)]">
            We’ll only use your email to share product updates.
          </p>
        </div>
      </section>

      {/* Social Media & Contact */}
      <section className="relative container mx-auto px-4 py-16 sm:py-20">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)/0.02] via-transparent to-[color:var(--color-primary)/0.03]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(38,191,206,0.02),transparent_70%)]"></div>

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={fadeUp.transition}
            viewport={fadeUp.viewport}
          >
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl bg-gradient-to-r from-[var(--color-text)] to-[var(--color-primary)] bg-clip-text text-transparent mb-6">
              Stay Connected
            </h2>
            <p className="text-lg text-[var(--foreground)]/80 sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              Follow us for updates, join our community, and be the first to
              know about new features and security insights.
            </p>

            {/* Social Media Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {/* Twitter/X */}
              <motion.a
                href="https://x.com/rugsenseapp"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)/0.08] to-[color:var(--color-primary)/0.04] border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 hover:shadow-lg hover:shadow-[var(--color-primary)]/20 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 mb-2 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[var(--color-text)] group-hover:text-white transition-colors duration-300">
                  Twitter/X
                </span>
              </motion.a>

              {/* Discord */}
              <motion.a
                href="https://discord.gg/rugsense"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)/0.08] to-[color:var(--color-primary)/0.04] border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 hover:shadow-lg hover:shadow-[var(--color-primary)]/20 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 mb-2 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 18.9 18.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 18.935 18.935 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[var(--color-text)] group-hover:text-white transition-colors duration-300">
                  Discord
                </span>
              </motion.a>

              {/* Telegram */}
              <motion.a
                href="https://t.me/rugsenseapp"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)/0.08] to-[color:var(--color-primary)/0.04] border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 hover:shadow-lg hover:shadow-[var(--color-primary)]/20 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 mb-2 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[var(--color-text)] group-hover:text-white transition-colors duration-300">
                  Telegram
                </span>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/rugsenseapp"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)/0.08] to-[color:var(--color-primary)/0.04] border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 hover:shadow-lg hover:shadow-[var(--color-primary)]/20 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 mb-2 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[var(--color-text)] group-hover:text-white transition-colors duration-300">
                  GitHub
                </span>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://instagram.com/rugsenseapp"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)/0.08] to-[color:var(--color-primary)/0.04] border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 hover:shadow-lg hover:shadow-[var(--color-primary)]/20 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 mb-2 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[var(--color-text)] group-hover:text-white transition-colors duration-300">
                  Instagram
                </span>
              </motion.a>

              {/* YouTube */}
              <motion.a
                href="https://youtube.com/@rugsenseapp"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)/0.08] to-[color:var(--color-primary)/0.04] border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 hover:shadow-lg hover:shadow-[var(--color-primary)]/20 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 mb-2 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[var(--color-text)] group-hover:text-white transition-colors duration-300">
                  YouTube
                </span>
              </motion.a>
            </div>

            {/* Main CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                href="https://linktr.ee/rugsenseapp"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/80 text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-[var(--color-primary)]/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Visit Our Linktree</span>
                <div className="relative w-5 h-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </motion.a>

              <div className="text-center sm:text-left">
                <p className="text-sm text-[var(--color-muted)] mb-2">
                  Find all our links at:
                </p>
                <div className="text-sm text-[var(--color-primary)] font-medium">
                  linktr.ee/rugsenseapp
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 pb-10 pt-8">
        <div className="mx-auto mt-6 max-w-6xl border-t border-[var(--color-primary)]/30 pt-6 text-center text-xs text-[var(--color-muted)]">
          © {new Date().getFullYear()} Rugsense. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
