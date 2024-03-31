import React from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";
import { useState } from "react";
import SuccessIcon from "./SuccessIcon";
const Form = () => {
	const [formSuccess, setFormSuccess] = useState(null);
	const [loading, setLoading] = useState(null);

	const env =
		"https://script.google.com/macros/s/AKfycbyhEIxehKLVrT5TxtWweK-b0rR-wvch9KcvKSvUTYiwIJ7kjHNpdxlVEkLt6zJgysaBmg/exec";

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		shouldFocusError: false,
	});

	const onSubmit = async (data) => {
		setLoading(true);
		try {
			const response = await fetch(env, {
				redirect: "follow",
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "text/plain;charset=utf-8",
				},
			});

			setFormSuccess(true);

			console.log(response);
		} catch (error) {
			setFormSuccess(false);
			setLoading(false);

			console.log(error);
		}
	};

	return (
		<>
			{formSuccess ? (
				<div className="Thank-you-section">
					<div>
						<SuccessIcon />
						<h1 className="thank-you-header">Gracias !</h1>
						<p className="thank-you-text">
							Hemos recibido su respuesta para la recepción. Estamos encantados
							de que puedas hacer parte de esta ocasión especial. Hasta Pronto !
						</p>
					</div>
				</div>
			) : (
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
							{...register("Telefono")}
						/>
					</div>
					<div className="Form-confirmation-mesage">
						<select
							name="Confirmacion"
							className={`Form-input ${errors.Confirmacion ? "error" : ""}`}
							placeholder="Confirmación"
							{...register("Confirmacion", { required: true })}
							aria-invalid={errors.Confirmación ? "true" : "false"}
							aria-required={true}>
							<option
								defaultValue
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
					{!loading ? (
						<div className="Form-submit-container">
							<div
								style={{ color: "red" }}
								className="error-message">
								{Object.keys(errors).length > 0 &&
									"Por favor revisa tus respuestas y vuelve a intentarlo"}
							</div>
							<input
								className="Form-submit"
								type="submit"
								value="Enviar"
							/>
						</div>
					) : (
						<div className="Form-submit-container-loading">
							<div className="loader"></div>
						</div>
					)}
				</form>
			)}
		</>
	);
};

export default Form;
