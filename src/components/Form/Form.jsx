import React from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";
import { useState } from "react";
import SuccessIcon from "./SuccessIcon";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Form = () => {
	const { t, i18n } = useTranslation();
	const [formSuccess, setFormSuccess] = useState(null);
	const [loading, setLoading] = useState(null);
	const location = useLocation();
	const registrationOption =
		location.pathname === "/restaurant"
			? "restaurant"
			: i18n.language === "en"
			? "ceremony and the restaurant"
			: "церемония и ресторан";

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
			if (
				(i18n.language === "en" || i18n.language === "rus") &&
				location.pathname !== "/restaurant"
			) {
				await Promise.all([
					fetch(
						"https://script.google.com/macros/s/AKfycbwwK1M6Eu_h26iU5H_9pkIjC-KnGCwfaeQP-9aatqpcHzxVzeuKbPVfVJnUq7F9V3HzEg/exec",
						{
							redirect: "follow",
							method: "POST",
							body: JSON.stringify(data),
							headers: {
								"Content-Type": "text/plain;charset=utf-8",
							},
						}
					),
					fetch(
						"https://script.google.com/macros/s/AKfycbyYXVQbvT4ehz5rbDkVLLMsfjIPpHYviZIU-5fBl7HMLeaI6A_0kyCFN91sVOXEfnsX8A/exec",
						{
							redirect: "follow",
							method: "POST",
							body: JSON.stringify(data),
							headers: {
								"Content-Type": "text/plain;charset=utf-8",
							},
						}
					),
				]);
			} else if (
				i18n.language === "en" &&
				location.pathname === "/restaurant"
			) {
				await fetch(
					"https://script.google.com/macros/s/AKfycbyYXVQbvT4ehz5rbDkVLLMsfjIPpHYviZIU-5fBl7HMLeaI6A_0kyCFN91sVOXEfnsX8A/exec",
					{
						redirect: "follow",
						method: "POST",
						body: JSON.stringify(data),
						headers: {
							"Content-Type": "text/plain;charset=utf-8",
						},
					}
				);
			} else {
				await fetch(
					"https://script.google.com/macros/s/AKfycbz1DMgRWIgrOiiVD2GgJ4w1pXhZWFmFwXcAF8DL-7XiySwnnB4Es67e11gRshbwCZN4gw/exec",
					{
						redirect: "follow",
						method: "POST",
						body: JSON.stringify(data),
						headers: {
							"Content-Type": "text/plain;charset=utf-8",
						},
					}
				);
			}

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
						<p className="thank-you-text">
							{i18n.language === "en" || i18n.language === "rus"
								? t("Thanks response", { registrationOption })
								: t("Thanks message")}
						</p>
					</div>
				</div>
			) : (
				<div className="Form-Section">
					{i18n.language !== "es" ? (
						<div className="info-location-section">
							{t("version-signup", { registrationOption })}
						</div>
					) : (
						""
					)}
					<div className="form-subsection">
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
									name="Alergia"
									className="Form-input-text-allergies"
									placeholder={t("Allergy")}
									{...register("Alergia")}
								/>

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
				</div>
			)}
		</>
	);
};

export default Form;
