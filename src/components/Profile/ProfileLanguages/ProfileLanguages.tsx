import Title from "../../Title/Title";

export type Language = {
  language: string;
  abbreviation: string;
  level: string;
};

const ProfileLanguages = ({ languages }: { languages: Language[] }) => {
  return (
    <div className="profile__block-container">
      <Title text="Languages" />
      <div className="profile__languages-container">
        {languages.map((language, index) => {
          return (
            <div className="profile__languages-language" key={index}>
              <span className="profile__languages-abb">
                {language.abbreviation}
              </span>
              <span className="profile__languages-level">{language.level}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileLanguages;
