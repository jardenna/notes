import { Fragment } from 'react';


import Input from '@formElements/Input';
import TextArea from '@formElements/TextArea';
import Button from '@commonReact/Button';

function Form(props) {

	const { btnVaiant, btnText, onSubmit, className, inputs, onChange, onClearAll, clearBtn, onBlur } = props;

	const btnClass = `btn-${btnVaiant ? btnVaiant : 'primary'}`;

	return (
		<Fragment>

			<form onSubmit={onSubmit} noValidate className={className}>
				{
					inputs.map(input => {
						return (
							<Fragment key={input.inputIdentifier}>

								{input.type !== 'textarea' ? <Input
									type={input.type}
									name={input.name}
									value={input.value}
									inputIdentifier={input.inputIdentifier}
									label={input.label}
									isRequired={input.isRequired}
									error={input.error}
									previewClassName={input.previewClassName}
									onChange={onChange}
									checked={input.checked}
									onBlur={onBlur}
								/> :
									<TextArea
										name={input.name}
										value={input.value}
										inputIdentifier={input.inputIdentifier}
										label={input.label}
										isRequired={input.isRequired}
										error={input.error}

									/>
								}

							</Fragment>
						);
					})
				}

				<footer className="form-footer">
					<Button
						type='submit'
						className={btnClass}
						btnText={btnText}
					/>
					{clearBtn && <Button
						className={btnClass}
						btnText={'Clear'}
						onClick={onClearAll}
					/>}

				</footer>


			</form>


		</Fragment>

	);
}
export default Form;

