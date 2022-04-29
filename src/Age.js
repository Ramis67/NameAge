export default function Age(props) {
    const { info } = props;
    return (
      <div className="bg-slate-100 mt-4 w-auto border-2 rounded-lg">
        <p className="text-cyan-700 text-xl">
          Your {info[0]} is {info[1]}
        </p>
        <p className="text-cyan-500 text-xl">Don't take it seriosuly :)</p>
      </div>
    );
  }
  