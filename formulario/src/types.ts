import React from "react"

export type NavegacionProps = {
    nombreUsuario: string,
    setNombreUsuario: React.Dispatch<React.SetStateAction<string>>
}

export type LoginProps = {
    setNombreUsuario: React.Dispatch<React.SetStateAction<string>>
} 