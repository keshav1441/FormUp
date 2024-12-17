import { GetFormById } from "@/action/form";
import FormLinkShare from "@/components/FormLinkShare";
import VisitBtn from "@/components/VisitBtn";
import React from "react";
import { StatsCard } from "../../page";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { TbArrowBounce } from "react-icons/tb";
import { HiCursorClick } from "react-icons/hi";

async function FormDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  // Fetch the form data
  const form = await GetFormById(Number(id));

  if (!form) {
    throw new Error("Form not found");
  }

  const { visits, submissions } = form;

  // Calculate submission rate and bounce rate
  let submissionRate = 0;
  if (visits > 0) {
    submissionRate = (submissions / visits) * 100;
  }
  const bounceRate = 100 - submissionRate;

  return (
    <>
      {/* Form Header */}
      <div className="border-b border-muted py-5 px-6">
        <div className="flex justify-between  ">
          <h1 className="text-3xl font-bold truncate">{form.name}</h1>
          <VisitBtn shareUrl={form.shareURL} />
        </div>
        </div>
        <div className="py-4 px-6 border-b border-muted">
          <div className="flex gap-2 items-center justify-between">
            <FormLinkShare shareUrl={form.shareURL} />
          </div>
      </div>
      <div className="w-full pt-8 gap-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 pb-6 px-6">
        <StatsCard
                title="Total visits"
                icon={<LuView className="text-blue-600" />}
                helperText="All time form visits"
                value={visits.toLocaleString() || ""}
                loading={false}
                className="shadow-md shadow-blue-600"
              />
              <StatsCard
                title="Total submissions"
                icon={<FaWpforms className="text-yellow-600" />}
                helperText="All time form submissions"
                value={submissions.toLocaleString() || ""}
                loading={false}
                className="shadow-md shadow-yellow-600"
              />
              <StatsCard
                title="Submission Rate"
                icon={<HiCursorClick className="text-green-600" />}
                helperText="Visits that result in form submission"
                value={submissionRate.toLocaleString()+"%" || ""}
                loading={false}
                className="shadow-md shadow-green-600"
              />
              <StatsCard
                title="Bounce Rate"
                icon={<TbArrowBounce className="text-red-600" />}
                helperText="Visits that leaves without interacting"
                value={bounceRate.toLocaleString()+"%" || ""}
                loading={false}
                className="shadow-md shadow-red-600"
              />
      </div>
      <div className="px-8  px-6">
        <SubmissionTable id={form.id} />

      </div>
    </>
  );
}

export default FormDetailPage;

function SubmissionTable({id}:{id:number}){
  return <>
  <h1 className="text-xl font-bold my-4">Submissions
    </h1></>
}
