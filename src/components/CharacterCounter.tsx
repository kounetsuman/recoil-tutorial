import {
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import charCountState from '../infrastructure/recoil/char-count-selector';
import textState from '../infrastructure/recoil/text-atom';
import TodoList from './TodoList';

export default function CharacterCounter() {
    return (
      <>
        <TodoList />
        <br />
        <br />
        <br />
        <br />
        <br />
        ~ここからテスト~
        <br />
        <TextInput />
        <br />
        <CharacterCount />
      </>
    );
};

const TextInput = () => {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <>
            <input type='text' value={text} onChange={onChange} />
            <br />
            Echo: {text}
        </>
    );
};

const CharacterCount = () => {
    const count = useRecoilValue(charCountState);
  
    return (
        <>
            Character Count: {count}
        </>
    );
};