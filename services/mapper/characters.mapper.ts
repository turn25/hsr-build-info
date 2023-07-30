import { config } from '@/config';
import { formatAttributeValue, mergeArray } from '@/libs';
import { Profile } from '@/services/interfaces';
import { CharacterVM } from '../vms/character.vm';

export const characterMapper = (characters: Profile['characters']) => {
  return characters.map((character): CharacterVM => {
    const { additions, attributes } = character;
    const mergeAttributes = mergeArray(additions, attributes, 'field');

    const computedAttributes: CharacterVM['attributes'] = mergeAttributes.map(
      (attribute) => {
        let total;
        const addition = additions.find((add) => add.field === attribute.field);
        const isPercentFormat = attribute.percent;

        if (addition && isPercentFormat) {
          total =
            addition === attribute
              ? attribute.value
              : addition.value + attribute.value;
        } else {
          total = attribute.value;
        }

        return {
          name: attribute.name,
          total: formatAttributeValue(total, isPercentFormat),
          value: formatAttributeValue(attribute.value, isPercentFormat),
          addition: formatAttributeValue(
            addition?.value ?? total,
            isPercentFormat
          ),
        };
      }
    );

    return {
      id: character.id,
      name: character.name,
      level: character.level,
      icon: config.assetUrl + character.icon,
      portrait: config.assetUrl + character.portrait,
      preview: config.assetUrl + character.preview,
      promotion: character.promotion,
      rank: {
        icons: character.rank_icons.map((icon) => config.assetUrl + icon),
        level: character.rank,
      },
      rarity: character.rarity,
      path: {
        icon: config.assetUrl + character.path.icon,
        name: character.path.name,
      },
      element: {
        icon: config.assetUrl + character.element.icon,
        name: character.element.name,
      },
      skills: character.skills.map((skill) => ({
        id: skill.id,
        icon: config.assetUrl + skill?.icon,
        name: skill?.name,
        description: skill?.desc,
        shortDescription: skill?.simple_desc,
        level: skill?.level,
        maxLevel: skill.max_level,
        effect: skill?.effect_text,
        type: skill?.type_text,
      })),
      relics: [],
      relicSets: [],
      attributes: computedAttributes,
    };
  });
};
