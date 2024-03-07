import Question from '@/components/forms/Question';
import User from '@/database/user.model';
import { connectToDatabase } from '@/lib/mongoose';
import { redirect } from 'next/navigation';

const AskQuestion = async () => {
  const userId = '123456789';
  if (!userId) redirect('/sign-in');

  connectToDatabase();

  const mongoUser = await User.findOne({ clerkid: userId });

  console.log(mongoUser);

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>

      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};

export default AskQuestion;
