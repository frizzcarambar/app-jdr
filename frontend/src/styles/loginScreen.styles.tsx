import { StyleSheet } from 'react-native';

export const loginStyle = StyleSheet.create({
    title: {
        fontSize: 28,
        marginBottom: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        backgroundColor: 'white',
        padding: 12,
        marginBottom: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    checkboxLabel: {
        marginLeft: 8,
    },
    button: {
        marginTop: 20,
    },
    error: {
        color: 'red',
        fontWeight: 'bold',
    },
});
