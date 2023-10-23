import styles from "./Team.module.css";
import { Grid } from "@mui/material";

const Team = () => {
  const team = [
    {
      profilePic: "/src/assets/Profile-Pics/danial.svg",
      name: "Danial Def",
      cases: 301,
    },
    {
      profilePic: "/src/assets/Profile-Pics/sanfole.svg",
      name: "Sanfole",
      cases: 850,
    },
    {
      profilePic: "/src/assets/Profile-Pics/cesforila.svg",
      name: "Cesforila",
      cases: 470,
    },
    {
      profilePic: "/src/assets/Profile-Pics/colleen.svg",
      name: "Colleen",
      cases: 180,
    },
    {
      profilePic: "/src/assets/Profile-Pics/haldone.svg",
      name: "Haldone",
      cases: 212,
    },
    {
      profilePic: "/src/assets/Profile-Pics/nik.svg",
      name: "Nik Jeo",
      cases: 350,
    },
  ];

  return (
    <div className={styles.container}>
      <p className={styles.brand}>Our Team</p>
      <Grid container className={styles["team-section"]}>
        {team.map((teamMember) => {
          return (
            <Grid
              item
              sm={4}
              className={styles["team-member"]}
              key={teamMember.name}
            >
              <div className={styles["profile-pic"]}>
                <img src={teamMember.profilePic} alt={teamMember.name} />
              </div>
              <div className={styles.info}>
                <p className={styles.name}>{teamMember.name}</p>
                <p className={styles.cases}>{teamMember.cases} Cases</p>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Team;
