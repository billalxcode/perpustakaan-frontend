"use client"
import { AppStore, makeStore } from "@/states/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

export default function ApppProvider(props: {
    children: ReactNode
}) {
    const storeRef = useRef<AppStore>(null)
    if (!storeRef.current) {
        storeRef.current = makeStore()
    }
    return (
        <Provider store={storeRef.current}>
            {props.children}
        </Provider>
    )
}