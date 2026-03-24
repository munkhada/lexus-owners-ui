<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Lexus Owner Portal - Login</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;700;800&amp;family=Inter:wght@300;400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "outline-variant": "#474747",
                        "outline": "#919191",
                        "surface-container-high": "#2a2a2a",
                        "primary-fixed-dim": "#454747",
                        "inverse-primary": "#5d5f5f",
                        "on-error": "#690005",
                        "inverse-on-surface": "#303030",
                        "tertiary": "#e4e2e1",
                        "on-primary-fixed-variant": "#e2e2e2",
                        "surface-container-highest": "#353535",
                        "surface-container": "#1f1f1f",
                        "surface": "#131313",
                        "surface-tint": "#c6c6c7",
                        "on-secondary-fixed-variant": "#3a3c3c",
                        "primary-container": "#d4d4d4",
                        "on-background": "#e2e2e2",
                        "on-tertiary-fixed": "#ffffff",
                        "on-error-container": "#ffdad6",
                        "primary": "#ffffff",
                        "on-tertiary-fixed-variant": "#e4e2e1",
                        "error": "#ffb4ab",
                        "surface-container-lowest": "#0e0e0e",
                        "secondary-fixed-dim": "#ababab",
                        "error-container": "#93000a",
                        "on-secondary-fixed": "#1a1c1c",
                        "on-surface": "#e2e2e2",
                        "on-primary-container": "#000000",
                        "secondary-container": "#464747",
                        "on-surface-variant": "#c6c6c6",
                        "secondary": "#c7c6c6",
                        "on-secondary-container": "#e3e2e2",
                        "inverse-surface": "#e2e2e2",
                        "tertiary-fixed-dim": "#474747",
                        "on-tertiary-container": "#000000",
                        "on-primary-fixed": "#ffffff",
                        "surface-bright": "#393939",
                        "tertiary-fixed": "#5f5e5e",
                        "on-secondary": "#1a1c1c",
                        "on-primary": "#1a1c1c",
                        "primary-fixed": "#5d5f5f",
                        "surface-variant": "#353535",
                        "background": "#131313",
                        "on-tertiary": "#1b1c1c",
                        "surface-container-low": "#1b1b1b",
                        "tertiary-container": "#929090",
                        "secondary-fixed": "#c7c6c6",
                        "surface-dim": "#131313"
                    },
                    fontFamily: {
                        "headline": ["Manrope"],
                        "body": ["Manrope"],
                        "label": ["Inter"]
                    },
                    borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .luxury-mesh-bg {
            background-color: #131313;
            background-image: 
                radial-gradient(at 0% 0%, rgba(255, 255, 255, 0.03) 0px, transparent 50%),
                radial-gradient(at 100% 100%, rgba(255, 255, 255, 0.02) 0px, transparent 50%);
            position: relative;
            overflow: hidden;
        }
        /* Parametric Curve Simulation */
        .luxury-mesh-bg::after {
            content: "";
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: repeating-linear-gradient(
                45deg,
                transparent,
                transparent 100px,
                rgba(255, 255, 255, 0.01) 100px,
                rgba(255, 255, 255, 0.01) 101px
            );
            transform: rotate(-15deg);
            pointer-events: none;
        }
        .glass-panel {
            background: rgba(31, 31, 31, 0.6);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
        }
    </style>
</head>
<body class="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
<!-- Top Navigation Anchor -->
<header class="bg-[#131313]/80 backdrop-blur-2xl text-white font-manrope tracking-[0.05em] uppercase text-sm fixed top-0 w-full z-50 flex justify-between items-center h-20 px-8 md:px-16 w-full">
<div class="text-lg font-light tracking-[0.3em] text-white">LEXUS MONGOLIA</div>
<nav class="hidden md:flex gap-12">
<a class="text-white font-bold transition-colors duration-400" href="#">LOGIN</a>
<a class="text-neutral-500 hover:text-white transition-colors duration-400" href="#">VEHICLES</a>
<a class="text-neutral-500 hover:text-white transition-colors duration-400" href="#">EXPERIENCE</a>
</nav>
<div class="md:hidden">
<span class="material-symbols-outlined">menu</span>
</div>
</header>
<main class="luxury-mesh-bg min-h-screen flex items-center justify-center px-6 pt-20">
<!-- Background Abstract Element -->
<div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
<svg class="w-full h-full" preserveaspectratio="none" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
<path d="M-100,800 Q300,600 500,850 T1100,750" fill="none" stroke="white" stroke-width="0.5"></path>
<path d="M-100,780 Q300,580 500,830 T1100,730" fill="none" stroke="white" stroke-width="0.3"></path>
<path d="M-100,820 Q300,620 500,870 T1100,770" fill="none" stroke="white" stroke-width="0.2"></path>
</svg>
</div>
<!-- Login Container -->
<div class="w-full max-w-md z-10">
<div class="glass-panel p-10 md:p-14 rounded-none border border-white/5 flex flex-col items-center shadow-2xl">
<!-- Brand Symbol -->
<div class="mb-12 opacity-90">
<svg fill="none" height="60" viewbox="0 0 100 100" width="60" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="48" stroke="white" stroke-width="1"></circle>
<path d="M25 70L40 30H55L75 70" stroke="white" stroke-linecap="square" stroke-width="1.5"></path>
<path d="M35 55H65" stroke="white" stroke-width="1"></path>
</svg>
</div>
<!-- Header -->
<div class="text-center mb-12">
<h1 class="text-display-lg text-3xl md:text-4xl font-light tracking-[0.2em] uppercase text-white mb-4">
                        Lexus Owner
                    </h1>
<p class="font-label text-xs tracking-[0.15em] text-neutral-500 uppercase">
                        Experience Amazing Every Day
                    </p>
</div>
<!-- Form -->
<form class="w-full space-y-10">
<div class="relative group">
<label class="font-label text-[10px] tracking-[0.15em] text-neutral-400 uppercase mb-3 block" for="phone">
                            Phone Number
                        </label>
<div class="relative border-b border-outline-variant/30 group-focus-within:border-primary transition-all duration-500">
<input class="w-full bg-transparent border-none px-0 py-4 text-white text-lg font-light tracking-widest placeholder:text-neutral-700 focus:ring-0" id="phone" name="phone" placeholder="+976" type="tel"/>
</div>
</div>
<div class="pt-4">
<button class="w-full bg-white text-on-primary py-5 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-400 hover:bg-primary-container active:scale-[0.98]" type="button">
                            Request OTP
                        </button>
</div>
</form>
<!-- Secure Footer -->
<div class="mt-12 flex items-center justify-center gap-2 opacity-40">
<span class="material-symbols-outlined text-sm">lock</span>
<span class="font-label text-[9px] tracking-[0.2em] uppercase">Secure Login</span>
</div>
</div>
<!-- Contextual Links -->
<div class="mt-8 flex justify-between px-2">
<a class="font-label text-[10px] tracking-[0.1em] text-neutral-500 hover:text-white transition-colors duration-300 uppercase" href="#">Enroll Now</a>
<a class="font-label text-[10px] tracking-[0.1em] text-neutral-500 hover:text-white transition-colors duration-300 uppercase" href="#">Need Help?</a>
</div>
</div>
</main>
<!-- Footer Anchor -->
<footer class="bg-[#0E0E0E] text-neutral-500 font-inter text-[10px] tracking-[0.15em] uppercase w-full py-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 px-8 md:px-24 w-full">
<div>
            © 2024 LEXUS MONGOLIA. ALL RIGHTS RESERVED.
        </div>
<div class="flex gap-10">
<a class="hover:text-white transition-colors duration-500" href="#">SUPPORT</a>
<a class="hover:text-white transition-colors duration-500" href="#">LEGAL</a>
<a class="hover:text-white transition-colors duration-500" href="#">PRIVACY</a>
<a class="hover:text-white transition-colors duration-500" href="#">CONTACT</a>
</div>
</footer>
</body></html>
