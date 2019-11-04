import { client } from './';

const url = '/question_section';

export function fetchQuestions(){
  return dispatch => {
    dispatch({
      type: 'FETCH_QUESTION',
      payload: client.get(url)
    })
  }
}
