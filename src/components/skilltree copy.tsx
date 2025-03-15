import React, { useState } from 'react';

const SkillTree = ({ skills }) => {
  const [skillLevels, setSkillLevels] = useState({});

  const updateSkillLevel = (skillId, newLevel) => {
    setSkillLevels((prevLevels) => ({
      ...prevLevels,
      [skillId]: newLevel,
    }));
  };

  const handleLeftClick = (skill) => {
    const currentLevel = skillLevels[skill.id] || 0;
    if (currentLevel < skill.maxLevel) {
      const newLevel = currentLevel + 1;
      updateSkillLevel(skill.id, newLevel);
      skill.prerequisites.forEach((prereq) => {
        if ((skillLevels[prereq] || 0) < skill.requiredLevel) {
          updateSkillLevel(prereq, skill.requiredLevel);
        }
      });
    }
  };

  const handleRightClick = (skill, event) => {
    event.preventDefault();
    const currentLevel = skillLevels[skill.id] || 0;
    if (currentLevel > 0) {
      updateSkillLevel(skill.id, currentLevel - 1);
    }
  };

  const renderSkill = (skill) => (
    <div key={skill.id} style={{ marginLeft: '20px' }}>
      <div
        onClick={() => handleLeftClick(skill)}
        onContextMenu={(e) => handleRightClick(skill, e)}
        style={{ cursor: 'pointer' }}
      >
        {skill.name} ({skillLevels[skill.id] || 0}/{skill.maxLevel})
      </div>
      {skill.children.length > 0 && (
        <div style={{ marginLeft: '20px' }}>
          {skill.children.map((child) => renderSkill(child))}
        </div>
      )}
    </div>
  );

  return <div>{skills.map((skill) => renderSkill(skill))}</div>;
};

export default SkillTree;
