import * as React from "react"
import { PropsWithChildren } from "react"
import { Fit } from "../Fit/Fit"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"

interface MainLayoutProps {
    title: string
    header?: boolean
    footer?: boolean
}

export const MainLayout = ({
    title,
    children,
    header,
    footer,
}: PropsWithChildren<MainLayoutProps>) => {
    return (
        <div className={"flex h-full w-full flex-1 flex-col bg-slate-50"}>
            {header && (
                <div className={"mb-4 border-b border-slate-200 bg-slate-100"}>
                    <Fit>
                        <Header />
                    </Fit>
                </div>
            )}
            <main className={"flex flex-col items-stretch"}>{children}</main>
            {footer && (
                <Fit>
                    <Footer />
                </Fit>
            )}
        </div>
    )
}