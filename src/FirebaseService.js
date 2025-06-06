import { database } from "./FirebaseConfig";
import { ref, get } from 'firebase/database';

///bio, experience, education, timeLine, skill, project

export const fetchBioData = async () => {
  try {
    const bioRef = ref(database, 'bio');
    const snapshot = await get(bioRef);
    const data = snapshot.val();
    if (!data) {
      throw new Error("No data found in the database.");
    }
    return data;
  } catch (error) {
    console.error("Error fetching bio data:", error.message);
    throw new Error(`Failed to fetch bio data. Please try again later. Additional error details: ${error.message}`);
  }
};

export const fetchExperienceData = async () => {
  try {
    const reference = ref(database, 'experience');
    const snapshot = await get(reference);
    const data = snapshot.val();
    if (!data) {
      throw new Error("No data found in the database.");
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw new Error(`Failed to fetch data. Please try again later. Additional error details: ${error.message}`);
  }
};

export const fetchEducationData = async () => {
  try {
    const reference = ref(database, 'education');
    const snapshot = await get(reference);
    const data = snapshot.val();
    if (!data) {
      throw new Error("No data found in the database.");
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw new Error(`Failed to fetch data. Please try again later. Additional error details: ${error.message}`);
  }
};

export const fetchTimelineData = async () => {
  try {
    const reference = ref(database, 'timeLine');
    const snapshot = await get(reference);
    const data = snapshot.val();
    if (!data) {
      throw new Error("No data found in the database.");
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw new Error(`Failed to fetch data. Please try again later. Additional error details: ${error.message}`);
  }
};

export const fetchSkillData = async () => {
  try {
    const reference = ref(database, 'skill');
    const snapshot = await get(reference);
    const data = snapshot.val();
    if (!data) {
      throw new Error("No data found in the database.");
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw new Error(`Failed to fetch data. Please try again later. Additional error details: ${error.message}`);
  }
};

export const fetchProjectData = async () => {
  try {
    const reference = ref(database, 'project');
    const snapshot = await get(reference);
    
    const data = snapshot.val();
    if (!data) {
      throw new Error("No data found in the database.");
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw new Error(`Failed to fetch data. Please try again later. Additional error details: ${error.message}`);
  }
};

