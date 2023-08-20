"use client";

import React, { ReactNode } from 'react'
import { SessionProvider } from "next-auth/react"

interface Props{
    children: ReactNode;
}


export const Providers = ({children}:Props) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}
