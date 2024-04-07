import React from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";
import { useState } from "react";
import SuccessIcon from "./SuccessIcon";
import { useTranslation } from "react-i18next";

const Form = () => {
	const [formSuccess, setFormSuccess] = useState(null);
	const [loading, setLoading] = useState(null);
	const { t } = useTranslation();

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
			await fetch(env, {
				redirect: "follow",
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "text/plain;charset=utf-8",
				},
			});

			setFormSuccess(true);
		} catch (error) {
			setFormSuccess(false);
			setLoading(false);
		}
	};

	return (
		<>
			{formSuccess ? (
				<div className="Thank-you-section">
					<div>
						<SuccessIcon />
						<h1 className="thank-you-header">{t("Thanks")}</h1>
						<p className="thank-you-text">{t("Thanks message")}</p>
					</div>
				</div>
			) : (
				<div className="Form-Section">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="Form-component">
						<div className="Form-name-telephone">
							<input
								name="Nombre"
								className={`Form-input ${errors.Nombre ? "error" : ""}`}
								placeholder={t("Name")}
								{...register("Nombre", { required: true })}
								aria-invalid={errors.Nombre ? "true" : "false"}
							/>

							<input
								name="Telefono"
								className="Form-input"
								placeholder={t("Telephone")}
								{...register("Telefono")}
							/>
						</div>
						<div className="Form-confirmation-mesage">
							<select
								name="Confirmacion"
								className={`Form-input ${errors.Confirmacion ? "error" : ""}`}
								placeholder={t("Confirmation")}
								{...register("Confirmacion", { required: true })}
								aria-invalid={errors.Confirmación ? "true" : "false"}
								aria-required={true}>
								<option
									defaultValue
									value=""
									disabled>
									{t("Confirmation")}
								</option>
								<option
									value="Sí, asistiremos."
									aria-selected={false}>
									{t("Yes assist")}
								</option>
								<option
									value="Lo siento, no podremos asistir."
									aria-selected={false}>
									{t("No assist")}
								</option>
							</select>

							<textarea
								name="Mensaje"
								className="Form-input-text"
								placeholder={t("Message")}
								{...register("Mensaje")}
							/>
						</div>
						{!loading ? (
							<div className="Form-submit-container">
								<div
									style={{ color: "red" }}
									className="error-message">
									{Object.keys(errors).length > 0 && t("Error message")}
								</div>
								<input
									className="Form-submit"
									type="submit"
									value={t("Send")}
								/>
							</div>
						) : (
							<div className="Form-submit-container-loading">
								<div className="loader"></div>
							</div>
						)}
					</form>
				</div>
			)}
		</>
	);
};

export default Form;
