import React, { useState } from 'react';
import { Container, TitleInput, InputForm, BtnSubmitForm, TxtSubmitForm } from "./styles";
import { ScrollView } from 'react-native-gesture-handler';
import { Alert } from 'react-native';
import api from '../../config/api';

export default function Orcamento() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [projeto, setProjeto] = useState('');
    const [loading, setLoading] = useState(false);


    const addOrcamento = async () => {

        setLoading(true);

        await api.post('/orcamento', { name, email, telefone, projeto }).then((response) => {
            Alert.alert("", response.data.message);
            setLoading(false);
        }).catch((err) => {
            if (err.response) {
                Alert.alert("", response.data.message);
                setLoading(false);
            } else {
                Alert.alert("", "Opps, tente mais tarde!");
                setLoading(false);
            }
        });

    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Container>
                <TitleInput>Nome</TitleInput>
                <InputForm placeholder="Nome Completo" autoCorrect={false} value={name} onChangeText={text => setName(text)}></InputForm>

                <TitleInput>E-mail</TitleInput>
                <InputForm placeholder="Seu Melhor E-mail" autoCorrect={false} value={email} keyboardType="email-address" autoCapitalize="none" onChangeText={text => setEmail(text)}></InputForm>

                <TitleInput>Telefone</TitleInput>
                <InputForm placeholder="(00) xxxx-xxxx" autoCorrect={false} value={telefone} onChangeText={text => setTelefone(text)}></InputForm>

                <TitleInput>Projeto</TitleInput>
                <InputForm placeholder="Conte sobre o projeto" autoCorrect={false} value={projeto} onChangeText={text => setProjeto(text)}></InputForm>

                <BtnSubmitForm onPress={addOrcamento} disabled="true">
                    <TxtSubmitForm>Cadastrar</TxtSubmitForm>
                </BtnSubmitForm>
            </Container>
        </ScrollView>
    );
}
