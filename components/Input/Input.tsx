import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core';
import Icon from "react-native-vector-icons/MaterialIcons";

interface InputProps {
    name: string;
    iconName?: string;
    label?: string;
    placeholder?: string;
}

const Input = ({ name, iconName, label, placeholder }: InputProps) => {

    const inputRef = useRef<TextInput>(null);
    const { registerField, fieldName, defaultValue = "", error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value",
            setValue: (ref, value) => {
                ref.setNativeProps({ text: value });
                ref.value = value;
            },
            clearValue: (ref) => {
                ref.setNativeProps({ text: "" });
                ref.value = "";
            },
        });
    }, [fieldName, registerField]);

    return (
        <View className="mb-4">
            {label && <Text className="text-gray-700 mb-1">{label}</Text>}
            <View className="flex-row items-center border border-gray-300 bg-white px-3 py-2 rounded-md">
                {iconName && <Icon name={iconName} size={22} color="#888" style={{ marginRight: 10 }} />}
                <TextInput
                    ref={inputRef}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    style={{ flex: 1, color: "#333", paddingRight: 10 }}
                />
            </View>
            {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
        </View>
    )
}

export default Input

const styles = StyleSheet.create({})