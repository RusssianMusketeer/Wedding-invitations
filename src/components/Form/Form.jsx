import React from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		shouldFocusError: false,
	});
	const onSubmit = async (data) => {
		if (data.username === "bill") {
			alert(JSON.stringify(data));
		} else {
			alert("There is an error");
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="Form-component">
			<div className="Form-name-telephone">
				<input
					name="Nombre"
					className={`Form-input ${errors.Nombre ? "error" : ""}`}
					placeholder="Nombre del asistente"
					{...register("Nombre", { required: true })}
					aria-invalid={errors.Nombre ? "true" : "false"}
				/>

				<input
					name="Telefono"
					className="Form-input"
					placeholder="Teléfono"
					{...register("Teléfono")}
				/>
			</div>
			<div className="Form-confirmation-mesage">
				<select
					name="Confirmacion"
					className={`Form-input ${errors.Nombre ? "error" : ""}`}
					placeholder="Confirmación"
					{...register("Confirmación", { required: true })}
					aria-invalid={errors.Confirmación ? "true" : "false"}
					aria-required={true}>
					<option
						selected="true"
						value=""
						disabled>
						Confirmación
					</option>
					<option
						value="Sí, asistiremos."
						aria-selected={false}>
						Sí, asistiremos.
					</option>
					<option
						value="Lo siento, no podremos asistir."
						aria-selected={false}>
						Lo siento, no podremos asistir.
					</option>
				</select>

				<textarea
					name="Mensaje"
					className="Form-input-text"
					placeholder="Mensaje para los novios"
					{...register("Mensaje")}
				/>
			</div>
			<div className="Form-submit-container">
				<input
					className="Form-submit"
					type="submit"
					value="Enviar"
				/>
			</div>
		</form>
	);
};

export default Form;
