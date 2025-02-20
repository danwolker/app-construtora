import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import { useRouter } from 'expo-router';
import * as Yup from "yup";
import Input from '@/components/Input/Input';
import ButtonSocialFacebook from '@/components/ButtonSocialFacebook/ButtonSocialFacebook';
import ButtonSocialGoogle from '@/components/ButtonSocialGoogle/ButtonSocialGoogle';

const LoginScreen = () => {

    const formRef = useRef<FormHandles>(null);
    const router = useRouter(); // 📌 Para navegação entre telas

    // Esquema de validação com Yup => DESCOMENTAR PARA USAR VALIDAÇÃO
    // const schema = Yup.object().shape({
    //     cpf: Yup.string().required("O CPF ou CNPJ é obrigatório"),
    //     password: Yup.string().min(6, "A senha deve ter no mínimo 6 caracteres").required("Senha obrigatória"),
    // });

    const handleSubmit = async (data) => {
        // TODO: Validar os dados do formulário
        console.log(data);
        console.log(typeof data);
        router.push("/home");

        // DESCOMENTAR PARA USAR VALIDAÇÃO
        // try {
        //     await schema.validate(data, { abortEarly: false });
        //     console.log("Dados do formulário:", data);

        //     // Simula um delay para exibição do estado de carregamento
        //     setTimeout(() => {
        //         router.push("/home");
        //     }, 1500);
        // } catch (err) {
        //     if (err instanceof Yup.ValidationError) {
        //         const validationErrors = {};
        //         err.inner.forEach(error => {
        //             validationErrors[error.path] = error.message;
        //         });

        //         formRef.current?.setErrors(validationErrors);
        //     }
        // }
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <View className="flex-1 px-12 justify-center">

                {/* Cabeçalho */}
                <View className="mb-8">
                    <Text className="text-4xl font-bold text-center text-gray-900 leading-tight mb-8">
                        Bem-vindo(a) ao{"\n"}<Text className="text-blue-600">App Construtora</Text>
                    </Text>
                    <Text className="text-gray-500 text-center mt-2">Entre com seu CPF ou senha</Text>
                </View>

                {/* Formulário */}
                <Form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

                    <Input
                        name="cpf"
                        iconName="email"
                        label="CPF ou CNPJ"
                        placeholder="Digite seu CPF ou CNPJ"
                    />
                    <Input
                        name="password"
                        iconName="lock"
                        label="Senha"
                        placeholder="Digite sua senha"
                    />
                    {/* Botão de Login */}
                    <TouchableOpacity
                        className={`mt-6 p-3 rounded-lg flex items-center justify-center bg-blue-500`}
                        onPress={() => formRef.current?.submitForm()}
                    >
                        <Text className="text-white text-lg font-bold">Entrar</Text>
                    </TouchableOpacity>
                </Form>

                {/* Links "Esqueci minha senha" e "Criar conta" */}
                {/* TODO: Implementar rotas: alterar {router.push("/login")} */}
                <View className="flex-row justify-between mt-4">
                    <TouchableOpacity onPress={() => router.push("/login")}>
                        <Text className="text-blue-500 text-sm">Esqueci minha senha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push("/login")}>
                        <Text className="text-blue-500 text-sm">Criar conta</Text>
                    </TouchableOpacity>
                </View>

                {/* Social Login */}
                <Text className="text-center text-gray-500 mt-6 text-sm">Ou entre com</Text>
                <View className="flex-row justify-center mt-4 space-x-4 gap-4">
                    <ButtonSocialGoogle />
                    <ButtonSocialFacebook />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;