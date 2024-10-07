import { Dispatch, FC, SetStateAction } from 'react';
import { STORAGE_DATA } from '../../../constants/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { updateStorage } from '../../../commonFuncs/commonFunctions';
import style from './_genForm.module.scss';

const GenForm: FC<{ setResult: Dispatch<SetStateAction<string>> }> = (props) => {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: {
            errors,
            isSubmitted,
        }
    } = useForm({
        mode: 'onSubmit',
    });

    type FormValue = {
        inputText?: string;
    }

    const clickHandler: SubmitHandler<FormValue> = (data) => {
        props.setResult((result) => result = data.inputText as string);

        updateStorage(STORAGE_DATA.GEN_DATA, data.inputText as string);
    }

    return (
        <form onSubmit={handleSubmit(clickHandler)}>
            <div className={style.inputBlock}>
                <input
                    type="text"
                    placeholder="Enter text"
                    {...register('inputText', {
                        required: 'Write something...',
                        maxLength: {
                            value: 80,
                            message: 'Maximum 80 symbols',
                        },
                        onChange: (event) => {
                            if (isSubmitted) {
                                reset();
                                setValue('inputText', event.nativeEvent.data);
                            }
                        },
                    })} />
                {errors?.inputText && errors.inputText?.message
                    && <i>{errors.inputText.message as string}</i>}
            </div>
            <button type="submit">Generate</button>
        </form>
    )
};

export default GenForm;