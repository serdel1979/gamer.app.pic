# Guía para Configurar y Ejecutar una Aplicación Ionic en Android Studio

## Introducción

Este documento proporciona una guía paso a paso para configurar, compilar y ejecutar una aplicación Ionic en Android Studio utilizando Capacitor.

## Requisitos Previos

- Node.js y npm instalados.
- Ionic CLI instalado.
- Android Studio instalado.
- Un emulador Android configurado o un dispositivo Android físico conectado.

## Pasos para Configurar el Proyecto

1. **Instalar Capacitor y Configurar el Proyecto**

   Navega a la raíz de tu proyecto Ionic y ejecuta los siguientes comandos para instalar Capacitor y configurar el proyecto:

   ```bash
   npm install @capacitor/core @capacitor/cli
   npx cap init


## Sincroniza y abre en Android Studio

2. **Instalar Capacitor y Configurar el Proyecto**

   Sincroniza y abre:

   ```bash
   npx cap sync
   ionic build