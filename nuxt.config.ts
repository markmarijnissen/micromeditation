// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    modules: [
        // '@vite-pwa/nuxt'
    ],
    pwa: {
        registerType: 'autoUpdate',
        manifest: {
            name: 'MicroMeditation',
            short_name: 'µMeditation',
            theme_color: '#000000',
            icons: [
                {
                    src: 'icon-192x192.png',
                    sizes: '192x192',
                    type: 'image/png',
                },
                {
                    src: 'icon-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                },
                {
                    src: 'icon-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'any maskable',
                },
            ],
        },
        // workbox: {
        //     navigateFallback: '/',
        //     globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
        // },
        // client: {
        //     installPrompt: true,
        // },
        devOptions: {
            // enabled: true,
            type: 'module',
        },
    }
})
