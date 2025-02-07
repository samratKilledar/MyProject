import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const TextInputComponent = ({ placeholder, type, value, onChangeText }) => {
    // Define icons based on input type
    const iconMap = {
        email: "email",
        password: "themeisle",
        number: "calculator",
        age: "user",
        text: "pencil-alt", // Default text input icon
    };

    return (
        <View style={styles.container}>
            <Icon name={iconMap[type] || "pencil-alt"} size={20} color="#900" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#999"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={type === "password"} // Hide text for passwords
                keyboardType={
                    type === "email"
                        ? "email-address"
                        : type === "number" || type === "age"
                        ? "numeric"
                        : "default"
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 10,
        width: 300,
        backgroundColor: "#fff",
        marginBottom: 10,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: "#333",
    },
});

export default TextInputComponent;
