function Button({text = 'Login'}) {
  return (
    <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded font-semibold
    cursor-pointer">
        {text}
    </button>
  )
}

export default Button