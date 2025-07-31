import { CastMember } from "../types/CastMember";

interface CastCardProps {
  member: CastMember;
}


const CastMemberCard: React.FC<CastCardProps> = ({ member }) => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "1rem",
      }}
    >
      {member.person.image?.medium && (
        <img
          src={member.person.image.medium}
          alt={member.person.name}
          style={{ borderRadius: "50%", marginRight: "1rem", width: 60 }}
        />
      )}
      <div>
        <strong>{member.person.name}</strong>
        <br/>
        <span>{member.character.name}</span>
      </div>
    </li>
  );
};

export default CastMemberCard;
