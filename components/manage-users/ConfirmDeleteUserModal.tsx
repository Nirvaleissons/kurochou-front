import {motion, AnimatePresence} from "framer-motion"
import {ReactNode} from "react";

interface ConfirmDeleteUserModalProps {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    children?: ReactNode
}

export default function ConfirmDeleteUserModal({isOpen, onConfirm, onCancel, children}: ConfirmDeleteUserModalProps) {
    if (!isOpen) return null;
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2}}
                >
                    <div
                        className="absolute inset-0"
                        onClick={onCancel}
                    />
                    <motion.div
                        className="relative z-10 w-full max-w-md rounded-2xl bg-gray-900 p-6 shadow-xl border border-gray-700"
                        initial={{scale: 0.9, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0.9, opacity: 0}}
                    >
                        <h2 className="text-lg font-semibold text-white mb-4">
                            Confirmar Exclusão
                        </h2>
                        <p className="text-gray-300 mb-6">
                            {children || "Tem certeza que deseja excluir este usuário?"}
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={onCancel}
                                className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 transition"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={onConfirm}
                                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-800 transition"
                            >
                                Excluir
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
