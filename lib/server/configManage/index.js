import { praseYaml, prasePath } from '../../tools';

const yamlPath = prasePath.cwdPath + '/applicationConfig.yaml'
const yamlConfig = praseYaml(yamlPath)

export {
	yamlConfig
}