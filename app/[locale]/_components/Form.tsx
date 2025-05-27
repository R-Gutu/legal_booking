'use client';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useRef } from 'react';
import Dropzone from "./dropzone";
import { useTranslations } from 'next-intl';
import FormAlert from "./FormAlert";
import { AnimatePresence } from "motion/react";

export default function ProjectForm({ className }: { className?: string }) {
  const t = useTranslations('contactForm');
  const [alertIsOpen, setAlertIsOpen] = useState(false);

  type ProjectFormData = {
    name: string;
    email: string;
    contact: string;
    message: string;
  };


  const schema = yup.object().shape({
    name: yup.string().required(t('validation.name.required')).min(3, t('validation.name.minLength')),
    email: yup.string().email(t('validation.email.invalid')).required(t('validation.email.required')),
    contact: yup.string().required(t('validation.contact.required')).min(8, t('validation.contact.minLength')),
    message: yup.string().required(t('validation.message.required')).min(10, t('validation.message.minLength')),
  });
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ProjectFormData>({
    resolver: yupResolver(schema)
  });

  const formRef = useRef<HTMLFormElement>(null);

  // const onSubmit = async (data: ProjectFormData) => {
  //   // send data here
  //   setIsSubmitting(true)
  //   console.log(data)
  //   setIsSubmitting(false)
  // };

 const onSubmit = async (data: { name: string; contact: string; email: string; message: string; }) => {
  setIsSubmitting(true)
  try {
    // Собираем тело запроса по спецификации Bitrix24
    const payload = {
      fields: {
        TITLE:    `Лид с сайта juristonline.md / ${data.contact}`,
        NAME:     data.name,
        PHONE:    [{ VALUE: data.contact, VALUE_TYPE: 'WORK' }],
        EMAIL:    data.email ? [{ VALUE: data.email, VALUE_TYPE: 'WORK' }] : [],
        COMMENTS: data.message,
      },
      params: { REGISTER_SONET_EVENT: 'Y' }
    }

    const res = await fetch(
      'https://nobilauto.bitrix24.ru/rest/7780/hi4l2tytpr206uob/crm.lead.add.json',
      {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      }
    )
    const json = await res.json()

    if (json.result) {
      console.log('Lead created, ID =', json.result)
      setAlertIsOpen(true)
      formRef.current?.reset()
    } else {
      console.error('Bitrix error:', json.error_description || json.error)
      // alert('Ошибка: ' + (json.error_description || json.error))
    }
  } catch (err) {
    console.error('Network error:', err)
    // alert('Сетевая ошибка: ' + err.message)
  } finally {
    setIsSubmitting(false)
  }
}


  const handleDrop = (acceptedFiles: File[]) => {
    setAttachments(acceptedFiles);
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className={`font-inter flex flex-col gap-[40px] items-center w-full text-[#6D758F] ${className}`}>
        <div className='flex max-[1200px]:flex-col w-full gap-[40px]'>
          <div className={`w-full flex flex-col gap-[20px] border-[1px] border-solid border-[#FFF] rounded-[8px] py-[24px] px-[40px] max-[600px]:px-[24px] max-[600px]:py-[18px] [box-shadow:0px_4px_4px_0px_#00000040]`}>
            <label htmlFor="name" className='text-[22px] max-[600px]:text-[16px]'>{t('fields.fullName')}</label>
              <input id="name" {...register("name")} type="text" placeholder={t('fields.fullNamePH')} className={`font-light appearance-none bg-transparent placeholder:text-[#E0E0E0] placeholder:text-[18px] max-[600px]:placeholder:text-[16px] border-b-[1px] border-[#333333] p-[6px] pl-0 outline-none focus:placeholder:opacity-0`} />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>
          <div className={`w-full flex flex-col gap-[20px] border-[1px] border-solid border-[#FFF] rounded-[8px] py-[24px] px-[40px] max-[600px]:px-[24px] max-[600px]:py-[18px] [box-shadow:0px_4px_4px_0px_#00000040]`}>
            <label htmlFor="email" className='text-[22px] max-[600px]:text-[16px]'>{t('fields.email')}</label>
            <input id="email" {...register("email")} type="email" placeholder={t('fields.emailPH')} className={`font-light appearance-none bg-transparent placeholder:text-[#E0E0E0] placeholder:text-[18px] max-[600px]:placeholder:text-[16px] border-b-[1px] border-[#333333] p-[6px] pl-0 outline-none focus:placeholder:opacity-0`} />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
        </div>
        <div className={`w-full flex flex-col gap-[20px] border-[1px] border-solid border-[#FFF] rounded-[8px] py-[24px] px-[40px] max-[600px]:px-[24px] max-[600px]:py-[18px] [box-shadow:0px_4px_4px_0px_#00000040]`}>
          <label htmlFor="message" className='text-[22px] max-[600px]:text-[16px]'>{t('fields.contact')}</label>
          <input type="text" id="message" {...register("contact")} placeholder={t('fields.contactPH')} className={`font-light appearance-none bg-transparent placeholder:text-[#E0E0E0] placeholder:text-[18px] max-[600px]:placeholder:text-[16px] border-b-[1px] border-[#333333] p-[6px] pl-0 outline-none focus:placeholder:opacity-0 resize-none`} />
          {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
        </div>
        <div className={`w-full flex flex-col gap-[20px] border-[1px] border-solid border-[#FFF] rounded-[8px] py-[24px] px-[40px] max-[600px]:px-[24px] max-[600px]:py-[18px] [box-shadow:0px_4px_4px_0px_#00000040]`}>
          <label htmlFor="message" className='text-[22px] max-[600px]:text-[16px]'>{t('fields.message')}</label>
          <input type="text" id="message" {...register("message")} placeholder={t('fields.messagePH')} className={`font-light appearance-none bg-transparent placeholder:text-[#E0E0E0] placeholder:text-[18px] max-[600px]:placeholder:text-[16px] border-b-[1px] border-[#333333] p-[6px] pl-0 outline-none focus:placeholder:opacity-0 resize-none`} />
          {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
        </div>
          <div className="w-full">
            <Dropzone onDrop={handleDrop} />
            {attachments.length > 0 && (
              <div className="mt-2">
                <p className="text-sm font-medium">{t('fields.selectedFiles')}</p>
                <ul className="list-disc pl-5">
                  {attachments.map((file, index) => (
                    <li key={index} className="text-sm">{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className='font-playfair text-[16px] font-bold ppearance-none outline-none border-none rounded-[8px] w-full py-[10px] flex items-center justify-center bg-[#003D35] cursor-pointer btn disabled:opacity-50 text-white'
        >
          {isSubmitting ? t('buttons.submitting') : t('buttons.submit')}
        </button>
      </form>
      <AnimatePresence>
        {alertIsOpen && <FormAlert setIsOpen={setAlertIsOpen} />}
      </AnimatePresence>
    </>
  );
}