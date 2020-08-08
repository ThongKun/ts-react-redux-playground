import axios from 'axios';
import 'redux';
import { Dispatch } from 'react';
import { ActionTypes } from './types';

export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export interface FetchTodoAction {
	type: ActionTypes.fetchTodos;
	payload: Todo[];
}

export interface DeleteTodoAction {
	type: ActionTypes.deleteTodo;
	payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
	return async (dispatch: Dispatch<FetchTodoAction>) => {
		const response = await axios.get<Todo[]>(url);

		dispatch({
			type: ActionTypes.fetchTodos,
			payload: response.data,
		});
	};
};

export const deleteTodo = (id: number): DeleteTodoAction => {
	return {
		type: ActionTypes.deleteTodo,
		payload: id,
	};
};
