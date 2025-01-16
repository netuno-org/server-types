import {java} from '../types';
import Values from '../objects/Values';
import DataSchema from '../objects/DataSchema';

interface Time {
	castToChronoLocalDate: {
		(o: java.lang.Object): java.time.chrono.ChronoLocalDate;
	}
	castToTemporal: {
		(o: java.lang.Object): java.time.temporal.Temporal;
	}
	castToTemporalAcessor: {
		(o: java.lang.Object): java.time.temporal.TemporalAccessor;
	}
	chronoField: {
		(field: string): java.time.temporal.ChronoField;
	}
	chronoUnit: {
		(field: string): java.time.temporal.ChronoUnit;
	}
	clock: {
		(): java.time.Clock;
	}
	clockFixed: {
		(fixedInstant: java.time.Instant, zone: java.time.ZoneId): java.time.Clock;
	}
	clockOffset: {
		(baseClock: java.time.Clock, offsetDuration: java.time.Duration): java.time.Clock;
	}
	clockSystem: {
		(zone: java.time.ZoneId): java.time.Clock;
	}
	clockSystemUTC: {
		(): java.time.Clock;
	}
	clockTick: {
		(baseClock: java.time.Clock, tickDuration: java.time.Duration): java.time.Clock;
	}
	clockTickMinutes: {
		(zone: java.time.ZoneId): java.time.Clock;
	}
	clockTickSeconds: {
		(zone: java.time.ZoneId): java.time.Clock;
	}
	currentMilis: {
		(): long;
	}
	date: {
		(): java.util.Date;
	}
	dateFrom: {
		(instant: java.time.Instant): java.util.Date;
	}
	dateTimeFormatter: {
		(): java.time.format.DateTimeFormatter;
		(pattern: string): java.time.format.DateTimeFormatter;
		(type: string, locale: java.util.Locale): java.time.format.DateTimeFormatter;
	}
	dateTimeFormatterBuilder: {
		(): java.time.format.DateTimeFormatterBuilder;
	}
	decimalStyle: {
		(): java.time.format.DecimalStyle;
		(type: string): java.time.format.DecimalStyle;
	}
	duration: {
		(): java.time.Duration;
		(type: string): java.time.Duration;
	}
	durationBetween: {
		(startInclusive: java.time.temporal.Temporal, endExclusive: java.time.temporal.Temporal): java.time.Duration;
	}
	durationFrom: {
		(temporalAmount: java.time.temporal.TemporalAmount): java.time.Duration;
	}
	durationOf: {
		(amount: long, unit: java.time.temporal.TemporalUnit): java.time.Duration;
	}
	durationOfDays: {
		(days: long): java.time.Duration;
	}
	durationOfHours: {
		(hours: long): java.time.Duration;
	}
	durationOfMillis: {
		(millis: long): java.time.Duration;
	}
	durationOfMinutes: {
		(minutes: long): java.time.Duration;
	}
	durationOfNanos: {
		(nanos: long): java.time.Duration;
	}
	durationOfSeconds: {
		(seconds: long): java.time.Duration;
		(seconds: long, nanoAdjustment: long): java.time.Duration;
	}
	gregorianCalendar: {
		(): java.util.GregorianCalendar;
		(year: int, month: int, dayOfMonth: int): java.util.GregorianCalendar;
		(year: int, month: int, dayOfMonth: int, hourOfDay: int, minute: int): java.util.GregorianCalendar;
		(year: int, month: int, dayOfMonth: int, hourOfDay: int, minute: int, second: int): java.util.GregorianCalendar;
		(aLocale: java.util.Locale): java.util.GregorianCalendar;
		(zone: java.util.TimeZone): java.util.GregorianCalendar;
		(zone: java.util.TimeZone, aLocale: java.util.Locale): java.util.GregorianCalendar;
	}
	gregorianCalendarConstant: {
		(name: string): int;
	}
	instant: {
		(): java.time.Instant;
		(type: string): java.time.Instant;
		(clock: java.time.Clock): java.time.Instant;
	}
	instantFrom: {
		(temporalAccessor: java.time.temporal.TemporalAccessor): java.time.Instant;
	}
	instantOfEpochMilli: {
		(epochMilli: long): java.time.Instant;
	}
	instantOfEpochSecond: {
		(epochsecond: long): java.time.Instant;
		(epochsecond: long, nanoAdjustment: long): java.time.Instant;
	}
	instantParse: {
		(text: java.lang.CharSequence): java.time.Instant;
	}
	isoFields: {
		(field: string): java.time.temporal.IsoFields;
	}
	julianFields: {
		(field: string): java.time.temporal.JulianFields;
	}
	localDate: {
		(): java.time.LocalDate;
		(type: string): java.time.LocalDate;
		(clock: java.time.Clock): java.time.LocalDate;
		(zone: java.time.ZoneId): java.time.LocalDate;
	}
	localDateFrom: {
		(temporalAccessor: java.time.temporal.TemporalAccessor): java.time.LocalDate;
	}
	localDateOf: {
		(year: int, month: int, dayOfMonth: int): java.time.LocalDate;
		(year: int, month: java.time.Month, dayOfMonth: int): java.time.LocalDate;
	}
	localDateOfEpochDay: {
		(epochDay: long): java.time.LocalDate;
	}
	localDateOfYearDay: {
		(year: int, dayOfYear: int): java.time.LocalDate;
	}
	localDateParse: {
		(text: java.lang.CharSequence): java.time.LocalDate;
		(text: java.lang.CharSequence, dateTimeFormatter: java.time.format.DateTimeFormatter): java.time.LocalDate;
	}
	localDateTime: {
		(): java.time.LocalDateTime;
		(type: string): java.time.LocalDateTime;
		(clock: java.time.Clock): java.time.LocalDateTime;
		(zone: java.time.ZoneId): java.time.LocalDateTime;
	}
	localDateTimeFrom: {
		(temporalAccessor: java.time.temporal.TemporalAccessor): java.time.LocalDateTime;
	}
	localDateTimeOf: {
		(year: int, month: int, dayOfMonth: int, hour: int, minute: int): java.time.LocalDateTime;
		(year: int, month: int, dayOfMonth: int, hour: int, minute: int, second: int): java.time.LocalDateTime;
		(year: int, month: int, dayOfMonth: int, hour: int, minute: int, second: int, nanoOfSecond: int): java.time.LocalDateTime;
		(year: int, month: java.time.Month, dayOfMonth: int, hour: int, minute: int): java.time.LocalDateTime;
		(year: int, month: java.time.Month, dayOfMonth: int, hour: int, minute: int, second: int): java.time.LocalDateTime;
		(year: int, month: java.time.Month, dayOfMonth: int, hour: int, minute: int, second: int, nanoOfSecond: int): java.time.LocalDateTime;
		(date: java.time.LocalDate, time: java.time.LocalTime): java.time.LocalDateTime;
	}
	localDateTimeOfEpochSecond: {
		(epochSecond: long, nanoOfSecond: int, offset: java.time.ZoneOffset): java.time.LocalDateTime;
	}
	localDateTimeOfInstant: {
		(instant: java.time.Instant, zone: java.time.ZoneId): java.time.LocalDateTime;
	}
	localDateTimeParse: {
		(text: java.lang.CharSequence): java.time.LocalDateTime;
		(text: java.lang.CharSequence, dateTimeFormatter: java.time.format.DateTimeFormatter): java.time.LocalDateTime;
	}
	localTime: {
		(): java.time.LocalTime;
		(type: string): java.time.LocalTime;
		(clock: java.time.Clock): java.time.LocalTime;
		(zone: java.time.ZoneId): java.time.LocalTime;
	}
	localTimeFrom: {
		(temporalAccessor: java.time.temporal.TemporalAccessor): java.time.LocalTime;
	}
	localTimeOf: {
		(hour: int, minute: int): java.time.LocalTime;
		(hour: int, minute: int, second: int): java.time.LocalTime;
		(hour: int, minute: int, second: int, nanoOfSecond: int): java.time.LocalTime;
	}
	localTimeOfNanoOfDay: {
		(nanoOfDay: long): java.time.LocalTime;
	}
	localTimeOfSecondOfDay: {
		(secondOfDay: long): java.time.LocalTime;
	}
	localTimeParse: {
		(text: java.lang.CharSequence): java.time.LocalTime;
		(text: java.lang.CharSequence, dateTimeFormatter: java.time.format.DateTimeFormatter): java.time.LocalTime;
	}
	month: {
		(type: string): java.time.Month;
	}
	monthDay: {
		(): java.time.MonthDay;
		(clock: java.time.Clock): java.time.MonthDay;
		(zone: java.time.ZoneId): java.time.MonthDay;
	}
	monthDayFrom: {
		(temporalAccessor: java.time.temporal.TemporalAccessor): java.time.MonthDay;
	}
	monthDayOf: {
		(month: int, dayOfMonth: int): java.time.MonthDay;
		(month: java.time.Month, dayOfMonth: int): java.time.MonthDay;
	}
	monthOf: {
		(month: int): java.time.Month;
	}
	monthValueOf: {
		(name: string): java.time.Month;
	}
	offsetDateTime: {
		(): java.time.OffsetDateTime;
		(type: string): java.time.OffsetDateTime;
	}
	offsetDateTimeFrom: {
		(temporalAccessor: java.time.temporal.TemporalAccessor): java.time.OffsetDateTime;
	}
	offsetDateTimeOf: {
		(year: int, month: int, dayOfMonth: int, hour: int, minute: int, second: int, nanoOfSecond: int, offset: java.time.ZoneOffset): java.time.OffsetDateTime;
		(date: java.time.LocalDate, time: java.time.LocalTime, offset: java.time.ZoneOffset): java.time.OffsetDateTime;
		(dateTime: java.time.LocalDateTime, offset: java.time.ZoneOffset): java.time.OffsetDateTime;
	}
	offsetDateTimeOfInstant: {
		(instant: java.time.Instant, offset: java.time.ZoneOffset): java.time.OffsetDateTime;
	}
	offsetTime: {
		(): java.time.OffsetTime;
		(type: string): java.time.OffsetTime;
		(clock: java.time.Clock): java.time.OffsetTime;
		(zone: java.time.ZoneId): java.time.OffsetTime;
	}
	offsetTimeFrom: {
		(temporalAccessor: java.time.temporal.TemporalAccessor): java.time.OffsetTime;
	}
	offsetTimeOf: {
		(hour: int, minute: int, second: int, nanoOfSecond: int, offset: java.time.ZoneOffset): java.time.OffsetTime;
		(time: java.time.LocalTime, offset: java.time.ZoneOffset): java.time.OffsetTime;
	}
	offsetTimeOfInstant: {
		(instant: java.time.Instant, zone: java.time.ZoneId): java.time.OffsetTime;
	}
	period: {
		(): java.time.Period;
		(type: string): java.time.Period;
	}
	periodFrom: {
		(temporalAmount: java.time.temporal.TemporalAmount): java.time.Period;
	}
	periodOf: {
		(years: int, months: int, days: int): java.time.Period;
	}
	periodOfDays: {
		(days: int): java.time.Period;
	}
	periodOfMonths: {
		(months: int): java.time.Period;
	}
	periodOfWeeks: {
		(weeks: int): java.time.Period;
	}
	periodOfYears: {
		(years: int): java.time.Period;
	}
	simpleDateFormat: {
		(format: string): java.text.SimpleDateFormat;
	}
	unit: {
		(field: string): java.util.concurrent.TimeUnit;
	}
	valueRangeOf: {
		(min: long, max: long): java.time.temporal.ValueRange;
		(min: long, maxSmallest: long, maxLargest: long): java.time.temporal.ValueRange;
		(minSmallest: long, minLargest: long, maxSmallest: long, maxLargest: long): java.time.temporal.ValueRange;
	}
	year: {
		(): java.time.Year;
		(type: string): java.time.Year;
		(clock: java.time.Clock): java.time.Year;
		(zone: java.time.ZoneId): java.time.Year;
	}
	yearFrom: {
		(temporalAccessor: java.time.temporal.TemporalAccessor): java.time.Year;
	}
	yearMonth: {
		(): java.time.YearMonth;
		(clock: java.time.Clock): java.time.YearMonth;
		(zone: java.time.ZoneId): java.time.YearMonth;
	}
	yearMonthFrom: {
		(temporalAccessor: java.time.temporal.TemporalAccessor): java.time.YearMonth;
	}
	yearMonthOf: {
		(year: int, month: int): java.time.YearMonth;
		(year: int, month: java.time.Month): java.time.YearMonth;
	}
	yearOf: {
		(isoYear: int): java.time.Year;
	}
	zoneId: {
		(): java.time.ZoneId;
	}
	zoneIdFrom: {
		(temporalAccessor: java.time.temporal.TemporalAccessor): java.time.ZoneId;
	}
	zoneIdOf: {
		(zoneId: string): java.time.ZoneId;
		(zoneId: string, aliasMap: Values | DataSchema | java.util.Map): java.time.ZoneId;
	}
	zoneIdOfOffset: {
		(prefix: string, offset: java.time.ZoneOffset): java.time.ZoneId;
	}
	zoneOffset: {
		(): java.time.ZoneOffset;
		(type: string): java.time.ZoneOffset;
	}
	zoneOffsetFrom: {
		(temporalAccessor: java.time.temporal.TemporalAccessor): java.time.ZoneOffset;
	}
	zoneOffsetOf: {
		(offsetId: string): java.time.ZoneOffset;
		(zoneId: string, aliasMap: Values | DataSchema | java.util.Map): java.time.ZoneId;
	}
	zoneOffsetOfHours: {
		(hours: int): java.time.ZoneOffset;
	}
	zoneOffsetOfHoursMinutes: {
		(hours: int, minutes: int): java.time.ZoneOffset;
	}
	zoneOffsetOfHoursMinutesSeconds: {
		(hours: int, minutes: int, seconds: int): java.time.ZoneOffset;
	}
	zoneOffsetOfOffset: {
		(prefix: string, offset: java.time.ZoneOffset): java.time.ZoneId;
	}
	zoneOffsetOfTotalSeconds: {
		(totalSeconds: int): java.time.ZoneOffset;
	}
	zonedDateTime: {
		(): java.time.ZonedDateTime;
		(type: string): java.time.ZonedDateTime;
		(clock: java.time.Clock): java.time.ZonedDateTime;
		(zone: java.time.ZoneId): java.time.ZonedDateTime;
	}
	zonedDateTimeFrom: {
		(temporalAccessor: java.time.temporal.TemporalAccessor): java.time.ZonedDateTime;
	}
	zonedDateTimeOf: {
		(year: int, month: int, dayOfMonth: int, hour: int, minute: int, second: int, nanoOfSecond: int, zone: java.time.ZoneId): java.time.ZonedDateTime;
		(date: java.time.LocalDate, time: java.time.LocalTime, zone: java.time.ZoneId): java.time.ZonedDateTime;
		(localDateTime: java.time.LocalDateTime, zone: java.time.ZoneId): java.time.ZonedDateTime;
	}
	zonedDateTimeOfInstant: {
		(instant: java.time.Instant, zone: java.time.ZoneId): java.time.ZonedDateTime;
		(localDateTime: java.time.LocalDateTime, offset: java.time.ZoneOffset, zone: java.time.ZoneId): java.time.ZonedDateTime;
	}
	zonedDateTimeOfLocal: {
		(localDateTime: java.time.LocalDateTime, zone: java.time.ZoneId, preferredOffset: java.time.ZoneOffset): java.time.ZonedDateTime;
		(localDateTime: java.time.LocalDateTime, offset: java.time.ZoneOffset, zone: java.time.ZoneId): java.time.ZonedDateTime;
	}
	zonedDateTimeParse: {
		(text: java.lang.CharSequence): java.time.ZonedDateTime;
		(text: java.lang.CharSequence, dateTimeFormatter: java.time.format.DateTimeFormatter): java.time.ZonedDateTime;
	}
}
declare const _time: Time;
export default _time;