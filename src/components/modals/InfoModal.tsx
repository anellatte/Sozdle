import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Ойын шарты" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        6 рет талпынып, сөзді табыңыз. Әр талпыныстан кейін шаршы түсі өзгеріп,
        жауапқа қанша жақын екеніңізді көрсетеді.
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        Бір күнде бір сөз. Алматы уақыты (GMT/UTC+6) бойынша, күн сайын жаңа сөз
        шығып тұрады.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="Б"
          status="correct"
        />
        <Cell value="Ә" isCompleted={true} />
        <Cell value="Й" isCompleted={true} />
        <Cell value="Г" isCompleted={true} />
        <Cell value="Е" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Б әрпі сөз ішінде бар әрі өз орнында тұр.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="М" isCompleted={true} />
        <Cell value="Ы" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="С"
          status="present"
        />
        <Cell value="Ы" isCompleted={true} />
        <Cell value="Қ" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        С әрпі сөз ішінде бар, алайда тұрған жері қате.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="А" isCompleted={true} />
        <Cell value="Л" isCompleted={true} />
        <Cell value="Т" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="Ы" status="absent" />
        <Cell value="Н" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ы әрпі сөзде мүлде жоқ.
      </p>

      {/* <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="font-bold underline"
        >
          check out the code here
        </a>{' '}
      </p> */}
    </BaseModal>
  )
}
