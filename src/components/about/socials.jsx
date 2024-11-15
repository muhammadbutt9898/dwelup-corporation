import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			{INFO.aboutSocials.map(({ icon, label, url }) => (
				<div className="social">
					<a href={url} target="_blank" rel="noreferrer">
						<div className="social-icon">
							<FontAwesomeIcon
								icon={icon}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Follow on {label}</div>
					</a>
				</div>
			))}

			<div className="email">
				<div className="email-wrapper">
					<a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>

						<div className="social-text">{INFO.main.email}</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
