export const padLeft = (value: number | string): number | string => {
  return `${value}`.length === 1 ? `0${value}` : value
}

export const delay = async (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve() }, ms)
  })
}

export const capitalise = (word: string): string => {
  if (parseInt(word[0])) {
    return word
  }
  return`${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
}

export const formatName = (name: string) => {
  return titleCase(name.replace(/_/g, ' '))
}

export const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

export const defaultNumSelectorOptions = [
  '0','1','2','3','4','5','6','7','8','9'
]

export const bgIntegerOptions = [
  '0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30' 
]

export const ketoIntegerOptions = [
  '0','1','2','3','4','5','6','7','8','9','10'
]

export const doseFractionOptions = ['0', '5']

export const clockHours = [
  '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'
]

export const clockMinutes = [
  '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', 
  '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
  '22', '21', '22', '23', '24', '25', '26', '27', '28', '29',
  '30', '31', '32', '33', '34', '35', '36', '37', '38', '39',
  '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
  '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'
]

const titleCase = (name: string) => {
  return name.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  }
)}
