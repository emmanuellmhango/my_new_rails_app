/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from './state/messageSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.message);

  const fetchMessage = async () => {
    const response = await axios.get('http://127.0.0.1:5000/messeges');
    const { message } = response.data;
    return message;
  };

  useEffect(() => {
    const fetchGreetings = async () => {
      const response = await fetchMessage();
      dispatch(addMessage(response));
    };

    fetchGreetings();
  }, [dispatch]);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Greeting;
