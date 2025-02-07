import React from "react";
import { Text, StyleSheet } from "react-native";

const TextComponent = ({ type = "paragraph", style, title }) => {
    // Define default styles based on the type
    const textStyles = {
        heading: styles.heading,
        subheading: styles.subheading,
        paragraph: styles.paragraph,
        caption: styles.caption,
    };

    return <Text style={[textStyles[type] || styles.paragraph, style]}>{title}</Text>;
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",margin:20
    },
    subheading: {
        fontSize: 18,
        fontWeight: "600",
        color: "#555",
    },
    paragraph: {
        fontSize: 16,
        color: "#666",
    },
    caption: {
        fontSize: 12,
        color: "#888",
        fontStyle: "italic",
    },
});

export default TextComponent;
