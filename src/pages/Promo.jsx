<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;700;800&amp;family=Inter:wght@300;400;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "on-background": "#e2e2e2",
              "on-error-container": "#ffdad6",
              "on-surface": "#e2e2e2",
              "surface-variant": "#353535",
              "tertiary-fixed-dim": "#474746",
              "tertiary": "#e5e2e1",
              "inverse-on-surface": "#303030",
              "primary-container": "#d4d4d4",
              "surface-container-lowest": "#0e0e0e",
              "tertiary-container": "#929090",
              "on-tertiary": "#1c1b1b",
              "primary-fixed-dim": "#454747",
              "surface-container-low": "#1b1b1b",
              "on-error": "#690005",
              "surface-container-highest": "#353535",
              "surface-tint": "#c6c6c7",
              "on-secondary-container": "#e4e2e1",
              "on-tertiary-fixed-variant": "#e5e2e1",
              "tertiary-fixed": "#5f5e5e",
              "primary": "#ffffff",
              "on-primary-container": "#000000",
              "inverse-primary": "#5d5f5f",
              "on-secondary-fixed-variant": "#3b3b3b",
              "outline-variant": "#474747",
              "surface": "#131313",
              "on-surface-variant": "#c6c6c6",
              "on-primary-fixed-variant": "#e2e2e2",
              "on-secondary-fixed": "#1b1c1c",
              "surface-container-high": "#2a2a2a",
              "surface-container": "#1f1f1f",
              "on-tertiary-fixed": "#ffffff",
              "secondary-fixed": "#c8c6c6",
              "secondary-fixed-dim": "#acabaa",
              "error-container": "#93000a",
              "on-tertiary-container": "#000000",
              "surface-dim": "#131313",
              "secondary": "#c8c6c6",
              "on-primary": "#1a1c1c",
              "error": "#ffb4ab",
              "primary-fixed": "#5d5f5f",
              "secondary-container": "#474747",
              "on-secondary": "#1b1c1c",
              "background": "#131313",
              "inverse-surface": "#e2e2e2",
              "outline": "#919191",
              "surface-bright": "#393939",
              "on-primary-fixed": "#ffffff"
            },
            fontFamily: {
              "headline": ["Manrope"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .editorial-shadow {
            box-shadow: 0 4px 60px rgba(226, 226, 222, 0.04);
        }
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
</head>
<body class="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 border-none bg-[#0E0E0E]/70 backdrop-blur-xl flex justify-between items-center px-6 md:px-12 py-8 w-full max-w-none">
<div class="text-xl font-black tracking-[0.2em] text-white font-headline">LEXUS MONGOLIA</div>
<div class="hidden md:flex items-center space-x-12">
<a class="text-gray-500 hover:text-white transition-colors duration-400 font-headline font-bold tracking-tighter uppercase scale-100 active:scale-95 transition-transform duration-300" href="#">Home</a>
<a class="text-gray-500 hover:text-white transition-colors duration-400 font-headline font-bold tracking-tighter uppercase scale-100 active:scale-95 transition-transform duration-300" href="#">Profile</a>
<a class="text-gray-500 hover:text-white transition-colors duration-400 font-headline font-bold tracking-tighter uppercase scale-100 active:scale-95 transition-transform duration-300" href="#">Concierge</a>
<a class="text-white border-b border-white pb-1 font-headline font-bold tracking-tighter uppercase scale-100 active:scale-95 transition-transform duration-300" href="#">Benefits</a>
</div>
<div class="flex items-center space-x-6">
<button class="text-white hover:text-white transition-all duration-400 ease-in-out scale-100 active:scale-95 transition-transform duration-300">
<span class="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</nav>
<!-- Main Content -->
<main class="pt-40 pb-20">
<!-- Hero Section: Editorial Header -->
<section class="px-6 md:px-12 mb-20 md:mb-32">
<div class="max-w-7xl mx-auto grid grid-cols-12 gap-8">
<div class="col-span-12 md:col-span-8">
<span class="uppercase tracking-[0.4em] text-[10px] text-outline mb-6 block font-label">The Lexus Reserve</span>
<h1 class="text-6xl md:text-[5.5rem] font-headline font-extrabold leading-[0.9] tracking-tighter text-white uppercase mb-8">
                        Beyond the <br/> <span class="text-outline-variant">Standard</span>
</h1>
</div>
<div class="col-span-12 md:col-span-4 flex items-end">
<p class="text-on-surface-variant font-body text-sm leading-relaxed max-w-xs opacity-80 border-l border-outline-variant/30 pl-6 py-2">
                        Membership is an invitation to a world curated for those who seek precision in every facet of life. Explore your exclusive privileges across Mongolia and beyond.
                    </p>
</div>
</div>
</section>
<!-- Feature Loupe: Private Event Access -->
<section class="mb-32">
<div class="relative w-full h-[819px] overflow-hidden group">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-105" data-alt="dramatic interior of a luxury modern architectural space with sharp geometric shadows and high contrast lighting in monochrome" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBifm27YoLdoVRe_5WxFNtlmyi5OgvIviV5apY7Uev8fwD_ArY8KBV5dBFgs_-TC-D5s2bY3eIIrdxm9AbxY5vT1hH8LueDCv3X1oSJowVdI7PLfTTJ2WUO7G_06ONGOK5w8NT5GOZiE8T5T-fkJAvJ7dO_iuq0W79iO7LZLe42Xoif560UI1KWnrLT8gEJsVUwUA5HW-CQMHsLF-He4UGyPYdj_FWFA4ObPVsU1erBCO-64PdkyzDCfK55i0JKXTsxWo435ROqalc')">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
<div class="absolute bottom-20 left-6 md:left-12 max-w-2xl">
<h2 class="text-4xl md:text-6xl font-headline font-bold text-white mb-6 tracking-tighter">Private Event Access</h2>
<p class="text-primary text-sm tracking-widest uppercase mb-8 font-label">Ulaanbaatar • Exclusive Invitations</p>
<button class="bg-primary text-on-primary px-12 py-5 font-headline font-bold uppercase tracking-widest text-xs hover:bg-on-surface transition-colors duration-300">Request Invitation</button>
</div>
</div>
</section>
<!-- Asymmetric Grid: Partner Privileges & Lounge -->
<section class="px-6 md:px-12 mb-32">
<div class="max-w-7xl mx-auto grid grid-cols-12 gap-y-20 md:gap-20">
<!-- Card 1: Partner Privileges -->
<div class="col-span-12 md:col-span-5 flex flex-col justify-center">
<span class="text-[10px] uppercase tracking-[0.3em] text-outline mb-4">01 / Lifestyle</span>
<h3 class="text-3xl md:text-5xl font-headline font-bold text-white mb-8 tracking-tighter">Partner <br/>Privileges</h3>
<p class="text-on-surface-variant text-sm mb-12 leading-loose">
                        Access a curated network of luxury boutiques, fine dining, and wellness retreats throughout Mongolia. Your Lexus key unlocks more than just your vehicle.
                    </p>
<div class="space-y-6">
<div class="flex items-center justify-between py-6 border-b border-outline-variant/20 group cursor-pointer">
<span class="text-white font-headline text-lg group-hover:pl-4 transition-all duration-400">Shangri-La Boutique Collection</span>
<span class="material-symbols-outlined text-outline group-hover:text-white transition-colors" data-icon="arrow_forward">arrow_forward</span>
</div>
<div class="flex items-center justify-between py-6 border-b border-outline-variant/20 group cursor-pointer">
<span class="text-white font-headline text-lg group-hover:pl-4 transition-all duration-400">Blue Sky Culinary Suite</span>
<span class="material-symbols-outlined text-outline group-hover:text-white transition-colors" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
</div>
<!-- Card 2: Imagery & Lounge -->
<div class="col-span-12 md:col-span-7 relative">
<div class="aspect-[4/5] w-full bg-surface-container-low relative overflow-hidden">
<img alt="Lexus Lounge" class="w-full h-full object-cover filter grayscale" data-alt="ultra modern luxury airport lounge with minimal furniture and vast glass walls looking out to a misty runway" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9lAHkWKQp7T4Imfa2hYkcPKbiOi-0bAapkGewXrwIQpYiv8awAe4M2mkM5oY8KHCoJXUJCYwbaGcZQMktMjF3GK-TUlco_S8S33GH0nbLkxKZZ8seohGehlULypBMfi9iqC5X027HlaROg_2lt0Xl1vX0X3yTovazTgGjXzYa_RQsXKjTKP9WRCjvdUUyvc-czm45zSJKxIfJrSR7kC3s58z6qyAmfstMI6k3u02Fjs3PR1rv4juB6iAjFO_6kllvUh_mlR-72PU"/>
<div class="absolute inset-0 bg-[#0E0E0E]/20"></div>
<div class="absolute top-12 right-12 text-right">
<h4 class="text-white font-headline text-2xl font-bold tracking-tight">Lexus Lounge Access</h4>
<p class="text-on-surface-variant text-xs uppercase tracking-widest mt-2">Chinggis Khaan International</p>
</div>
</div>
<div class="absolute -bottom-10 -left-10 hidden md:block w-64 h-80 bg-surface-container-highest p-8 editorial-shadow">
<span class="material-symbols-outlined text-primary text-4xl mb-6" data-icon="flight_takeoff">flight_takeoff</span>
<h5 class="text-white font-headline font-bold text-xl mb-4 leading-tight">Seamless Transit</h5>
<p class="text-on-surface-variant text-xs leading-relaxed">Relax in curated comfort before your journey. Complimentary for Black Tier members.</p>
</div>
</div>
</div>
</section>
<!-- Tonal Section: Priority Service -->
<section class="bg-surface-container-low py-32 px-6 md:px-12 overflow-hidden">
<div class="max-w-7xl mx-auto">
<div class="grid grid-cols-12 gap-8 items-center">
<div class="col-span-12 md:col-span-6 order-2 md:order-1">
<div class="relative">
<div class="text-[12rem] font-headline font-black text-surface-container-highest absolute -top-40 -left-10 select-none opacity-50">LEXUS</div>
<h3 class="text-4xl md:text-6xl font-headline font-bold text-white mb-8 tracking-tighter relative z-10">Priority <br/>Service Booking</h3>
<p class="text-on-surface-variant text-base mb-12 max-w-md">
                                Your time is the ultimate luxury. Experience expedited maintenance and dedicated technical advisors at our Ulaanbaatar service center.
                            </p>
<div class="flex space-x-4">
<button class="bg-primary text-on-primary px-10 py-4 font-headline font-bold uppercase tracking-widest text-[10px] hover:bg-on-surface transition-all">Book Service</button>
<button class="border border-outline-variant text-white px-10 py-4 font-headline font-bold uppercase tracking-widest text-[10px] hover:bg-surface-container-high transition-all">Call Concierge</button>
</div>
</div>
</div>
<div class="col-span-12 md:col-span-6 order-1 md:order-2 mb-12 md:mb-0">
<div class="aspect-square bg-surface overflow-hidden">
<img alt="Technical Excellence" class="w-full h-full object-cover filter brightness-75 contrast-125" data-alt="close up of a high performance car engine detail with metallic textures and dark shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa_tlTYVey7f-MSwYbpMgKr5S-2bTFi35Yk2af3rX7miqx5yBXzmZ-kABtN0h7hXifl1RJBdpv0eqM8Vc_eDB18Gvf3fAKSHagN9RWX01_MFdjv94FBDTS0VTIrzNTIXKVZ7JlrHKZvsN-G5KFwamZch0IGGkJkLPoHR2xZFBcZhz8dQSdoa3iB9mTc7udZH3H3-XEQVvE5VfG1HPnNjFh9lxkOLMQOnyIeL6qfSJjO_ugfhdL5LyzC5jdd3OHuSCUDRmB-yLGOn4"/>
</div>
</div>
</div>
</div>
</section>
<!-- Benefits Directory (List Section) -->
<section class="px-6 md:px-12 py-32">
<div class="max-w-7xl mx-auto">
<div class="flex justify-between items-end mb-16">
<h3 class="text-2xl font-headline font-bold text-white uppercase tracking-[0.2em]">The Full Directory</h3>
<span class="text-outline text-xs font-label">Scroll to explore</span>
</div>
<div class="space-y-0">
<!-- Item 1 -->
<div class="group py-12 border-t border-outline-variant/10 flex flex-wrap md:flex-nowrap items-center hover:bg-surface-container-low transition-colors duration-400 px-4">
<div class="w-full md:w-24 text-outline font-headline font-bold text-2xl mb-4 md:mb-0">01</div>
<div class="w-full md:w-1/3">
<h4 class="text-white text-2xl font-headline font-bold group-hover:translate-x-2 transition-transform duration-400">Complimentary Valet</h4>
</div>
<div class="w-full md:w-1/3 text-on-surface-variant text-sm mt-4 md:mt-0 px-0 md:px-8">
                            Premium valet parking at all major luxury venues in Ulaanbaatar.
                        </div>
<div class="w-full md:w-1/4 flex justify-end mt-6 md:mt-0">
<button class="text-primary text-[10px] uppercase tracking-widest font-bold border-b border-primary/20 pb-1">Learn More</button>
</div>
</div>
<!-- Item 2 -->
<div class="group py-12 border-t border-outline-variant/10 flex flex-wrap md:flex-nowrap items-center hover:bg-surface-container-low transition-colors duration-400 px-4">
<div class="w-full md:w-24 text-outline font-headline font-bold text-2xl mb-4 md:mb-0">02</div>
<div class="w-full md:w-1/3">
<h4 class="text-white text-2xl font-headline font-bold group-hover:translate-x-2 transition-transform duration-400">Seasonal Detailing</h4>
</div>
<div class="w-full md:w-1/3 text-on-surface-variant text-sm mt-4 md:mt-0 px-0 md:px-8">
                            Quarterly deep-cleansing and protection treatment for your interior.
                        </div>
<div class="w-full md:w-1/4 flex justify-end mt-6 md:mt-0">
<button class="text-primary text-[10px] uppercase tracking-widest font-bold border-b border-primary/20 pb-1">Learn More</button>
</div>
</div>
<!-- Item 3 -->
<div class="group py-12 border-t border-b border-outline-variant/10 flex flex-wrap md:flex-nowrap items-center hover:bg-surface-container-low transition-colors duration-400 px-4">
<div class="w-full md:w-24 text-outline font-headline font-bold text-2xl mb-4 md:mb-0">03</div>
<div class="w-full md:w-1/3">
<h4 class="text-white text-2xl font-headline font-bold group-hover:translate-x-2 transition-transform duration-400">Exclusive Test Drives</h4>
</div>
<div class="w-full md:w-1/3 text-on-surface-variant text-sm mt-4 md:mt-0 px-0 md:px-8">
                            First access to pilot upcoming Lexus models before general release.
                        </div>
<div class="w-full md:w-1/4 flex justify-end mt-6 md:mt-0">
<button class="text-primary text-[10px] uppercase tracking-widest font-bold border-b border-primary/20 pb-1">Learn More</button>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full py-20 px-12 border-none bg-[#131313] flex flex-col items-start space-y-8">
<div class="font-manrope font-bold text-white text-xl tracking-[0.2em] font-headline uppercase">LEXUS MONGOLIA</div>
<div class="grid grid-cols-1 md:grid-cols-4 gap-12 w-full pt-8">
<div class="flex flex-col space-y-4">
<span class="text-primary opacity-100 font-inter text-[10px] tracking-[0.1em] uppercase">Experience</span>
<a class="font-inter text-[10px] tracking-[0.1em] uppercase opacity-40 hover:opacity-100 transition-opacity duration-400 text-white" href="#">The Range</a>
<a class="font-inter text-[10px] tracking-[0.1em] uppercase opacity-40 hover:opacity-100 transition-opacity duration-400 text-white" href="#">Innovation</a>
<a class="font-inter text-[10px] tracking-[0.1em] uppercase opacity-40 hover:opacity-100 transition-opacity duration-400 text-white" href="#">Heritage</a>
</div>
<div class="flex flex-col space-y-4">
<span class="text-primary opacity-100 font-inter text-[10px] tracking-[0.1em] uppercase">Legal</span>
<a class="font-inter text-[10px] tracking-[0.1em] uppercase opacity-40 hover:opacity-100 transition-opacity duration-400 text-white" href="#">Privacy</a>
<a class="font-inter text-[10px] tracking-[0.1em] uppercase opacity-40 hover:opacity-100 transition-opacity duration-400 text-white" href="#">Terms</a>
<a class="font-inter text-[10px] tracking-[0.1em] uppercase opacity-40 hover:opacity-100 transition-opacity duration-400 text-white" href="#">Contact</a>
</div>
</div>
<div class="pt-12 w-full flex justify-between items-center border-t border-outline-variant/10">
<span class="font-inter text-[10px] tracking-[0.1em] uppercase opacity-40 text-white">© 2024 LEXUS MONGOLIA. ALL RIGHTS RESERVED.</span>
<div class="flex space-x-6">
<span class="material-symbols-outlined text-white opacity-40 hover:opacity-100 cursor-pointer" data-icon="language">language</span>
<span class="material-symbols-outlined text-white opacity-40 hover:opacity-100 cursor-pointer" data-icon="share">share</span>
</div>
</div>
</footer>
</body></html>
