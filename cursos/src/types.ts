import React from "react"

export type NavigationProps = {
    nombreUsuario: string,
    setNombreUsuario: React.Dispatch<React.SetStateAction<string>>
}

export type LoginProps = {
    setNombreUsuario: React.Dispatch<React.SetStateAction<string>>
} 