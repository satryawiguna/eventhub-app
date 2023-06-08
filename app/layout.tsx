import {Inter} from 'next/font/google'
import Provider from "@/redux/provider";
import PersistGate from "@/redux/persistGate";
import './globals.css'

const inter = Inter({subsets: ['latin']})

const metaData = {
    title: 'EventHub',
    description: 'Epic you event management',
}

const RootLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Provider>
            <PersistGate>{children}</PersistGate>
        </Provider>
        </body>
        </html>
    )
}

export {metaData}
export default RootLayout
